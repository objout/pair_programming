<template>

  <view class="container">

    <view class="title">在线模式</view>

    <view class="game-board">
        <view class="player-dices left">
          <dice
            v-for="n in 5"
            :key="n"
            :value="player1.dices[n-1]"
            :locked="player1.lockStatus[n-1]"
            @locked="lockThisDice(player1.id, n-1, $event)"
          ></dice>
        </view>

        <view>
          <view>
            Round {{ curRound }}
          </view>

          <view>
            player1 {{ player1.chips }}
          </view>

          <view>
            player2 {{ player2.chips }}
          </view>
        </view>

        <view class="player-dices right">
          <dice
            v-for="n in 5"
            :key="n"
            :value="player2.dices[n-1]"
            :locked="player2.lockStatus[n-1]"
            @locked="lockThisDice(player2.id, n-1, $event)"
          ></dice>
        </view>

    </view>

    <view v-if="this.id != '' && turn == Number(id)">

      <button class="btn" @click="rollDices"
        v-if="isRollPhase">
        投掷
      </button>

      <button class="btn" @click="lockDices"
        v-if="isLockPhase">
        锁定
      </button>

      <button class="btn" @click="updateMagni(0)"
        v-if="isMagniPhase">
        +倍率0
      </button>
      <button class="btn" @click="updateMagni(1)"
        v-if="isMagniPhase">
        +倍率1
      </button>
      <button class="btn" @click="updateMagni(2)"
        v-if="isMagniPhase">
        +倍率2
      </button>
      <button class="btn" @click="updateMagni(3)"
        v-if="isMagniPhase">
        +倍率3
      </button>

    </view>

    <view>
      <button class="btn" @click="startGame" v-if="!isEntered">
        进入房间
      </button>
    </view>
  </view>

</template>

<script>
export default {

  components: {
    "game-board": () => import("@/components/board/board.vue"),
    "dice": () => import("@/components/dice/dice.vue"),
  },

  data() {
    let players = [
      {
        dices: [1, 1, 1, 1, 1],
        lockStatus: [false, false, false, false, false],
        chips: 1000,
        id: "",
      },

      {
        dices: [1, 1, 1, 1, 1],
        lockStatus: [false, false, false, false, false],
        chips: 1000,
        id: "",
      },
    ];

    return {
      innings: 1,
      curInning: 1,

      rounds: 3,
      curRound: 0,

      magnification: 1,

      first: 0,
      turn: 0,

      players: players,
      player1: players[0],
      player2: players[1],

      lockList: [],

      id: "", // player identifier
      isRolled: false,
      isLocked: false,
      waiting: true,
      ws: null,
      msg: null,
    };
  },

  mounted() { // Initialization
    this.ws = uni.connectSocket({
      url: "ws://192.168.250.128:8000/ws/room/abc/",
      success: () => {
        console.log("Websocket is connected successfully.");
      },
    });
    this.ws.onMessage(this.handleMessage);
    this.ws.onClose(this.handleClose);

    this.msg = {
      action: "",
      id: this.id,
    };
  },

  computed: {
    isEntered() {
      return !(this.id === '');
    },

    isRollPhase() {
      return !this.isRolled;
    },

    isLockPhase() {
      const isRolled = this.isRolled,
            curRound = this.curRound,
            isLocked = this.isLocked;
      return isRolled && !isLocked && curRound < this.rounds && curRound != -1;
    },

    isMagniPhase() {
      const isRolled = this.isRolled,
            curRound = this.curRound,
            isLocked = this.isLocked;
      return isRolled && isLocked && curRound != -1 && curRound < this.rounds;
    },
  },

  methods: {
    success: () => console.log("success."),
    fail: () => console.log("failed."),

    handleMessage(event) {
      const data = JSON.parse(event.data);
      console.log(data);

      const status = data.status;

      switch (status) {
        case "get_id":
          this.id = data.id;
          this.msg.id = this.id;
          break;
        case "waiting":
          this.waiting = true;
          break;
        case "magni":
          this.player1.chips = data.player1.chips;
          this.player2.chips = data.player2.chips;

          this.magnification = data.magnification;
          this.turn = Number(data.turn);
          break;
        case "cal_score":
          this.player1.chips = data.player1.chips
          this.player2.chips = data.player2.chips
          break;
        default:
          const player1 = this.player1,
                player2 = this.player2;

          this.waiting = false;

          player1.id = data.player1.id;
          player2.id = data.player2.id;

          player1.dices = data.player1.dices;
          player2.dices = data.player2.dices;

          player1.lockStatus = data.player1.lockStatus;
          player2.lockStatus = data.player2.lockStatus;

          player1.chips = data.player1.chips;
          player2.chips = data.player2.chips;

          this.innings = data.innings;
          this.curInning = data.curInning;

          this.curRound = data.curRound;

          this.magnification = data.magnification;

          this.first = Number(data.first);
          this.turn = Number(data.turn);
      }
    },

    handleClose() {
      console.log('Websocket has been closed.');
    },

    // Get the identifier of the current player.
    startGame() {
      this.msg.action = "get_id";
      this.ws.send({
        data: JSON.stringify(this.msg),
        success: this.success,
        fail: this.fail,
      });
    },

    // Notice the server to roll dices.
    rollDices() {
      // switch status
      this.isRolled = true;
      this.lockList = [];

      this.msg.action = "turn";
      this.ws.send({
        data: JSON.stringify(this.msg),
        success: this.success,
        fail: this.fail,
      });

      if (this.curRound == this.rounds && this.id === this.player2.id) {
        this.calScore();
      }
    },

    // Notice the server to lock dices.
    lockDices() {
      // switch status
      this.isLocked = true;

      this.msg.action = "lock";
      this.msg.lockList = this.lockList;
      this.ws.send({
        data: JSON.stringify(this.msg),
        success: this.success,
        fail: this.fail,
      });
      delete this.msg.lockList;
    },

    lockThisDice(id, index, status) {
      console.log(id, index, status);
      if (this.id != id) {
        return ;
      }
      if (this.turn != Number(this.id)) {
        return ;
      }
      if (!(this.isRolled && !this.isLocked)) {
        return ;
      }
      if (this.curRound == this.rounds) {
        return ;
      }

      let player = this.players[Number(this.id)]

      if (player.lockStatus[index] === true) {
        return ;
      }

      this.lockList.push(index);
      this.$set(player.lockStatus, index, status)
    },

    // Update magnification.
    updateMagni(num) {
      this.msg.action = "magni";
      this.msg.num = num; // magnification to send.
      this.ws.send({
        data: JSON.stringify(this.msg),
        success: this.success,
        fail: this.fail,
      });
      delete this.msg.num;

      // switch status
      this.isRolled = false;
      this.isLocked = false;

      // Do not activate locking dices by players in the third round
      if (this.curRound == this.rounds - 1 && this.id == this.player2.id) {
        this.isLocked = true;
      }
    },

    // Calculate the scores of players.
    calScore() {
      this.msg.action = "cal_score";
      this.ws.send({
        data: JSON.stringify(this.msg),
        success: this.success,
        fail: this.fail,
      });
    },

    navigateBack() {
      this.id = "";
      this.ws.close();
      uni.navigateBack();
    },
  }
};
</script>

<style>
.container {
  align-items: center;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.game-board {
  background-color: #fff;
  height: 300px;
  margin-bottom: 20px;
  width: 100%;
}

.game-info {
  margin-bottom: 20px;
}

.btn {
  background-color: #4CAF50;
  border-radius: 5px;
  border: none;
  color: white;
  margin: 10px;
  padding: 10px 20px;
}

.game-board {
  display: flex;
  justify-content: space-between;
}

.player-dices.left {
  margin-right: 10px;
}

.player-dices.right {
  margin-left: 10px;
}
</style>