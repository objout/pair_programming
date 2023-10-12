<template>
  <view class="content-background" >
		<img class="backgroun-img" src="../../static/images/backgroud.jpg" alt="">
		<view class="container" >
		  <view class="title">选择游戏模式</view>
		  <button class="btn" @click="navigateTo('game_local')">本地对战</button>
		  <button class="btn" @click="navigateTo('game_ai')">人机对战</button>
		  <button class="btn" @click="navigateTo('game_online')">在线对战</button>
		  <button class="btn" @click="navigateBack">返回</button>
			<popup ref="popup" >
				<view class="games-number-wrap">
					<view class="title-text">请输入对局局数</view>
					<view class="number-input">
						<input placeholder="请输入" type="number" maxlength="2" v-model="gamesNumber" >
					</view>
					<button class="" @click="enterGame" type="primary">进入游戏</button>
				</view>
			</popup>
		</view>
	</view>
</template>

<script>
	import popup from '@/components/uni-popup/uni-popup.vue'
export default {
	components:{
		popup
	},
	data(){
		return {
			gamesNumber:'',
			path:'',
			isShow:false,
			contentHeight:'calc(100vh - 44px)'
		}
	},
	onLoad(){
		// #ifdef MP-WEIXIN
		this.contentHeight = '100vh'
		// #endif
	},
  methods: {
    navigateTo(path) {
			this.path = path
			this.$refs.popup.open('center')
      // uni.navigateTo({
      //   url: `/pages/${page}/${page}`
      // });
    },
    navigateBack() {
      uni.navigateBack();
    },
		enterGame(){
			this.$refs.popup.close()
			uni.navigateTo({
			  url: `/pages/${this.path}/${this.path}?bureauNum=${this.gamesNumber}`
			});
		}
  }
};
</script>

<style>
	page{
		background-size: cover;
		background-position: center center;
		background-repeat: no-repeat;
		/* height: calc(100vh - 44px) ; */
		width: 100%;
	}
	
	/* #ifdef H5 */
	.content-background{
		height: calc(100vh - 44px);
	}
	/* #endif */
	
	/* #ifdef MP-WEIXIN */
	.content-background{
		height: 100vh;
	}
	
	/* #endif */
	
	.content-background{
		width: 100%;
		position: relative;
	}
	
	.backgroun-img{
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	
	.games-number-wrap{
		width: 600rpx;
		background-color: #fff;
		padding: 40rpx 30rpx;
		border-radius: 8rpx;
	}
	
	.title-text{
		font-size: 35rpx;
		font-weight: 600;
		text-align: center;
		margin-bottom: 40rpx;
	}
	.number-input{
		border:1rpx solid #e9e9e9;
		height: 60rpx;
		margin-bottom: 50rpx;
	}
	
	.number-input input {
		height: 100%;
		line-height: 60rpx;
		padding: 0 15rpx;
	}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  /* background-color: #f0f0f0; */
	background-color: transparent;
	position: absolute;
	z-index: 11;
	width: 100%;
}
.title {
  font-size: 24px;
  margin-bottom: 20px;
	color: #fff;
}
.btn {
  margin: 10px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>