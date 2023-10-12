<template>
	<view class="content-background">
		<img class="backgroun-img" src="../../static/images/backgroud.jpg" alt="">
		<view class="container">
			<view class="title">欢迎来到骰子对战游戏</view>
			<!-- <image src="/static/images/welcome.png" class="welcome-image" /> -->
			<swiper class="swiper" indicator-dots indicator-color="#fff" circular autoplay>
				<swiper-item class="item1 swiper-item">
					<image src="../../static/images/pic-1.jpg" mode="aspectFit">
				</swiper-item>
				<swiper-item class="item2 swiper-item">
					<image src="../../static/images/pic-2.jpg" mode="aspectFit">
				</swiper-item>
			</swiper>
			<button class="btn" @click="navigateTo('model_select')">开始游戏</button>
			<button class="btn" @click="navigateTo('rules')">游戏规则</button>
			<button class="btn1" @click="toggleMusic()">背景音乐</button>
			<!-- <audio class= "audio" src="https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3" controls loop ></audio> -->
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			navigateTo(page) {
				uni.navigateTo({
					url: `/pages/${page}/${page}`
				});
			},
			toggleMusic() {
				if (!this.audio) {
					this.audio = uni.createInnerAudioContext();
					this.audio.src =
						'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-hello-uniapp/2cc220e0-c27a-11ea-9dfb-6da8e309e0d8.mp3';
					this.audio.loop = true;
				}

				if (!this.isPlaying) {
					this.audio.play();
					this.isPlaying = true;
				} else {
					this.audio.pause();
					this.isPlaying = false;
				}
			}
		}
	};
</script>
<style>
	.content-background{
		width: 100%;
		position: relative;
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
	.backgroun-img{
		position: absolute;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
		background-color: transparent;
		width: 100%;
		z-index: 11;
		position: absolute;
	}

	.background-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.title {
		font-size: 24px;
		margin-bottom: 180rpx;
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

	.swiper {
		/* 	box-sizing:border-box; */
		height: 450rpx;
		width: 100%;
	}

	.item1 {
		height: 100rpx;
		width: 100%;
	}

	.item2 {
		height: 100rpx;
		width: 100%;
	}

	.btn1 {
		display: block;
		margin: 0 auto;
		padding: 10px 20px;
		font-size: 16px;
		background-color: #007bff;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.swiper-item {
		display: flex;
		justify-content: center;
	}
</style>