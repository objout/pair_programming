import json

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer

from .game import DiceGame


class GameConsumer(WebsocketConsumer):
    player_list = []
    rooms = {}

    def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "room_%s" % self.room_name

        async_to_sync(self.channel_layer.group_add)(  # type:ignore
            self.room_group_name,
            self.channel_name
        )

        self.accept()

    def disconnect(self, _):
        GameConsumer.player_list.clear()
        GameConsumer.rooms.clear()

        async_to_sync(self.channel_layer.group_discard)(  # type:ignore
            self.room_group_name,
            self.channel_name
        )

    def checkPlayerStatus(self):
        length = len(GameConsumer.player_list)
        return False if length < 2 else True

    def receive(self, text_data):
        print(text_data)
        data = json.loads(text_data)
        action = data.get("action", "")
        status = action

        if action == "turn":
            if self.checkPlayerStatus():
                req_id = data.get("id", "")
                if self.nextTurn(req_id) is False:
                    return
            else:
                self.sendWaiting()
                return
        elif action == "lock":
            if self.checkPlayerStatus():
                req_id = data.get("id", "")
                lockList = data.get("lockList", "")
                if self.lockDice(req_id, lockList) is False:
                    return
            else:
                self.sendWaiting()
                return
        elif action == "magni":
            if self.checkPlayerStatus():
                if self.updateMagni(data.get("num", "")) is False:
                    return
            else:
                self.sendWaiting()
                return
        elif action == "cal_score":
            if self.checkPlayerStatus():
                self.calScore()
            else:
                self.sendWaiting()
                return
        elif action == "get_id":
            self.getId()
            return
        else:
            return

        async_to_sync(self.channel_layer.group_send)(  # type:ignore
            self.room_group_name,
            {
                "type": "sendMsg",
                "s": status,
            }
        )

    def sendWaiting(self):
        self.send(
            text_data=json.dumps({"status": "waiting"})
        )

    def getId(self):
        players = GameConsumer.player_list
        length = len(players)
        if length == 2:  # 已有两个玩家
            return

        players.append(str(length))
        length += 1

        if length >= 2:
            game = DiceGame(id1=players[0], id2=players[1], first=players[0])
            GameConsumer.rooms[self.room_name] = game

        self.send(
            text_data=json.dumps(
                {"status": "get_id", "id": GameConsumer.player_list[-1]}
            )
        )

    def calScore(self):
        self.game_driver = GameConsumer.rooms[self.room_name]
        self.game_driver.calScore()

    def updateMagni(self, num):
        self.game_driver = GameConsumer.rooms[self.room_name]
        turn = self.game_driver.turn

        k = num
        self.game_driver.incMagnification(k=int(k))
        self.game_driver.turn = int(not turn)
        return True

    def lockDice(self, req_id, lockList):
        self.game_driver = GameConsumer.rooms[self.room_name]
        turn = self.game_driver.turn
        id = self.game_driver.ord2id(turn)
        if id != req_id:
            return False

        if self.game_driver.curRound < self.game_driver.rounds:
            self.game_driver.players[id].lockDice(lockList)
        else:
            self.game_driver.players[id].lockDice([0, 1, 2, 3, 4])
        self.game_driver.turn = int(not turn)
        return True

    def nextTurn(self, req_id):
        self.game_driver = GameConsumer.rooms[self.room_name]
        turn = self.game_driver.turn
        id = self.game_driver.ord2id(turn)
        if id != req_id:
            return False

        k = self.game_driver.players[id].calAvail()
        self.game_driver.rollDice(k)
        self.game_driver.players[id].updateDiceStatus(
            self.game_driver.rollRes
        )

        if turn == int(self.game_driver.first):
            if self.game_driver.curRound < self.game_driver.rounds:
                self.game_driver.curRound += 1
            else:
                self.game_driver.curRound = 0
                self.game_driver.curInning += 1

        if self.game_driver.curRound == self.game_driver.rounds:
            self.game_driver.turn = int(not turn)

        return True

    def sendMsg(self, event):
        s = event["s"]
        self.game_driver = GameConsumer.rooms[self.room_name]
        obj = self.game_driver.getStatus()
        obj["status"] = s
        self.send(text_data=json.dumps(obj))
