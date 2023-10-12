<template>
  <view class="container">
    <view class="score-info">
      <text>玩家1得分: {{ player1Score }}</text>
      <text>玩家1筹码: {{ player1Chips }}</text>
    </view>
    <view class="score-info">
      <text>玩家2得分: {{ player2Score }}</text>
      <text>玩家2筹码: {{ player2Chips }}</text>
    </view>
    <!-- 如果有更多玩家，可以继续添加更多的score-info视图 -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      player1Score: 0,
      player1Chips: 100,
      player2Score: 0,
      player2Chips: 100,
      // 如果有更多玩家，可以在这里添加更多的数据属性
    };
  },
  methods: {
    updateScore(player, score) {
      this[`player${player}Score`] = score;
    },
    updateChips(player, chips) {
      this[`player${player}Chips`] = chips;
    }
  }
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 20px;
}
.score-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
</style>