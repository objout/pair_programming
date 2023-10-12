<template>
  <view class="container">
    <view class="title">游戏规则</view>
    <view class="content">
      <!-- 在这里添加游戏规则的详细内容 -->
      <text>1. 进入游戏，选择游戏模式后，设置游戏局数和玩家个人筹码数</text><br>
	  <text>2.每一局游戏内有三轮投掷机会，玩家一人一次轮流投掷骰子，每个玩家有5个骰子</text><br>
	  <text>3.前两次投掷骰子之后可以选择锁定0~5个骰子，锁定的骰子位于选定区域不再改变</text><br>
	  <text>4.前两轮每轮投掷结束并在所有玩家锁定骰子后，每位玩家可以选择增加倍率：0，1，2，3。选择完成后进入下一轮。</text><br>
	  <text>5.第三轮投掷结束后，所有玩家的全部骰子自动锁定并进行计分（得分为五个骰子的点数总和+奖励分），得出最终结果，筹码划分。</text><br>
	  <text>双对 ：10分</text><br>
	  <text>三连 ：10分</text><br>
	  <text>葫芦：20分</text><br>
	  <text>四连： 40分</text><br>
	  <text>四连： 40分</text><br>
	  <text>小顺子：30分</text><br>
	  <text>大顺子：60分</text><br>
	  <text>分数最高的玩家从所有其它玩家手里赢得（二人分差的绝对值）*（总倍率）的筹码。N局游戏后，筹码最多的玩家获胜。如若中途有玩家筹码小于等于0，则该玩家被击飞，游戏直接结束（都没了的意思哦）。</text>
    </view>
    <button class="btn" @click="navigateBack">返回</button>
  </view>
</template>

<script>
export default {
  methods: {
    navigateBack() {
      uni.navigateBack();
    }
  }
};
</script>

<style>
.container {
  padding: 20px;
  background-color: #f0f0f0;
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
}
.content {
  margin-bottom: 20px;
}
.btn {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>