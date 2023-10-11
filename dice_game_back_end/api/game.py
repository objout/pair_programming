import random


class DiceGamePlayer:
    def __init__(self, id, chips=1000):
        self.id = id  # 玩家标识

        self.chips = chips  # 筹码
        self.dices = [1] * 5
        self.lockStatus = [False] * 5

    def calAvail(self):  # 计算当前未被锁定的骰子个数
        return self.lockStatus.count(False)

    def lockDice(self, lockList=[]):  # 锁定指定位置的骰子
        for i in lockList:
            self.lockStatus[int(i)] = True

    def updateDiceStatus(self, rollRes):  # 根据投掷结果, 更新骰子状态
        j = 0
        for i in range(5):
            if self.lockStatus[i] is False:
                self.dices[i] = rollRes[j]
                j += 1

    def hasThreeSame(self):  # 三连?(e.g. 11123)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
            if counts[dice - 1] == 3:
                return True
        return False

    def hasFourSame(self):  # 四连?(e.g. 11112)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
            if counts[dice - 1] == 4:
                return True
        return False

    def hasFiveSame(self):  # 五连?(e.g. 11111)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
            if counts[dice - 1] == 5:
                return True
        return False

    def hasThreeWithTwo(self):  # 葫芦?(e.g. 33322)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
        for i in counts:
            if i == 1 or i == 5:
                return False
        return True

    def hasSmallStraight(self):  # 小顺子?(12346 or 13456)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
        if counts == [1, 1, 1, 1, 0, 1] or counts == [1, 0, 1, 1, 1, 1]:
            return True
        return False

    def hasStraight(self):  # 大顺子?(12345 or 23456)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
        if counts == [1, 1, 1, 1, 1, 0] or counts == [0, 1, 1, 1, 1, 1]:
            return True
        return False

    def hasDoublePair(self):  # 双对?(e.g. 11223)
        counts = [0] * 6
        for dice in self.dices:
            counts[dice - 1] += 1
        if counts.count(2) == 2:
            return True
        return False

    def getScore(self):
        score = sum(self.dices)
        if self.hasThreeSame():
            score += 10
        if self.hasFourSame():
            score += 40
        if self.hasFiveSame():
            score += 100
        if self.hasThreeWithTwo():
            score += 20
        if self.hasSmallStraight():
            score += 30
        if self.hasStraight():
            score += 60
        if self.hasDoublePair():
            score += 10
        return score

    def getStatus(self):
        return {
            "id": self.id,
            "chips": self.chips,
            "dices": self.dices,
            "lockStatus": self.lockStatus,
        }


class DiceGame:
    def __init__(self, id1, id2, first, innings=1):
        self.innings = innings  # 总局数
        self.curInning = 1  # 当前局数

        self.rounds = 3  # 总轮数
        self.curRound = 0  # 当前轮数

        self.magnification = 1  # 倍率

        # 玩家
        self.id1 = id1
        self.id2 = id2
        self.players = {
            id1: DiceGamePlayer(id1),
            id2: DiceGamePlayer(id2)
        }

        self.__turnMap__ = {
            0: self.id1,
            1: self.id2,
        }
        self.first = first  # 先手
        self.turn = int(first)
        self.rollRes = []  # 投掷结果

    def id2ord(self, id):
        return 0 if id == self.id1 else 1

    def ord2id(self, ord):
        return self.__turnMap__[ord]

    def rollDice(self, k):
        self.rollRes.clear()
        for _ in range(k):
            self.rollRes.append(random.randint(1, 6))

    def incMagnification(self, k=0):
        if k < 0 or k > 3:
            return
        self.magnification += k

    def calScore(self):
        p1 = self.players[self.id1]
        p2 = self.players[self.id2]

        score1 = p1.getScore()
        score2 = p2.getScore()

        diff = abs(score1 - score2)
        win_chips = diff * self.magnification

        if score1 > score2:
            p1.chips += win_chips
            p2.chips -= win_chips
        else:
            p2.chips += win_chips
            p1.chips -= win_chips

        p1.dices = [1] * 5
        p1.lockStatus = [False] * 5
        p2.dices = [1] * 5
        p2.lockStatus = [False] * 5

    def getStatus(self):
        return {
            "innings": self.innings,
            "curInning": self.curInning,
            "rounds": self.rounds,
            "curRound": self.curRound,
            "magnification": self.magnification,
            "player1": self.players[self.id1].getStatus(),
            "player2": self.players[self.id2].getStatus(),
            "first": self.first,
            "turn": self.turn,
            "rollRes": self.rollRes
        }
