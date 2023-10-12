<template>
	<view>
		<div class="dice" ref="dice">
			<div class="face"><div class="item1"></div></div>
			<div class="face">
				<div class="item2"></div>
				<div class="item2"></div>
			</div>
			<div class="face">
				<div class="item3"></div>
				<div class="item3"></div>
				<div class="item3"></div>
			</div>
			<div class="face">
				<div class="face_0">
					<div class="item4"></div>
					<div class="item4"></div>
				</div>
				<div class="face_0">
					<div class="item4"></div>
					<div class="item4"></div>
				</div>
			</div>
			<div class="face">
				<div class="face_0">
					<div class="item5"></div>
					<div class="item5"></div>
				</div>
				<div class="face_0"><div class="item5"></div></div>
				<div class="face_0">
					<div class="item5"></div>
					<div class="item5"></div>
				</div>
			</div>
			<div class="face">
				<div class="face_0">
					<div class="item6"></div>
					<div class="item6"></div>
				</div>
				<div class="face_0">
					<div class="item6"></div>
					<div class="item6"></div>
				</div>
				<div class="face_0">
					<div class="item6"></div>
					<div class="item6"></div>
				</div>
			</div>
		</div>
		<p class="view">当前点数: {{num}}</p>

		<p><button id="play" @tap="run">PLAY</button></p>
	</view>
</template>

<script>
export default {
	data() {
		return {
			num:"1",
			posible: [
				{
					value: 1,
					x: 0,
					y: 0
				},
				{
					value: 6,
					x: 0,
					y: 180
				},
				{
					value: 3,
					x: 0,
					y: -90
				},
				{
					value: 4,
					x: 0,
					y: 90
				},
				{
					value: 5,
					x: -90,
					y: 0
				},
				{
					value: 2,
					x: 90,
					y: 0
				}
			]
		};
	},
	methods: {
		run() {
			let that = this;
			let _random,_result;
			let timer = setInterval(()=>{
				_random = Math.floor(Math.random() * 6)
				_result = that.posible[_random];
				that.$refs.dice.style.transform = `rotateX(${_result.x}deg) rotateY(${_result.y}deg)`
				that.renderView(_result.value); // 渲染视图
			},700)
			setTimeout(() => {
				clearInterval(timer)
			},10000);
		},
		renderView(result) {
			this.num = result
		}
	}
};
</script>

<style lang="scss" scoped>
@keyframes rotate {
	to {
		transform: rotateX(360deg) rotateY(360deg);
	}
}

@keyframes domo {
	20% {
		transform: rotateX(20deg);
	}
	60% {
		transform: rotateX(20deg) rotateY(200deg);
	}
	100% {
		transform: rotateX(100deg) rotateY(1000deg) rotateZ(-100deg);
	}
}

.dice {
	width: 100px;
	height: 100px;
	margin: 100px auto;
	position: relative;
	transform-style: preserve-3d;
	/* animation: rotate 2s; */
	animation-duration: 3s;
	animation-timing-function: linear;
	transition: all 1s;
}

.dice:hover {
	animation: domo 5s linear 0s infinite alternate;
}

.dice .face {
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	left: 0;
	top: 0;
	border: 1px solid #000;
	background: rgb(253, 250, 250);
	border-radius: 5px;
	font-size: 100px;
	color: #fff;
	text-align: center;
}

.item1 {
	width: 30px;
	height: 30px;
	background: red;
	border-radius: 50%;
}

.item2 {
	width: 5px;
	height: 5px;
	background: blue;
	border-radius: 50%;
}

.item3 {
	width: 5px;
	height: 5px;
	background: blue;
	border-radius: 50%;
}

.item4 {
	width: 5px;
	height: 5px;
	background: rgb(240, 54, 54);
	border-radius: 50%;
}

.item5 {
	width: 5px;
	height: 5px;
	background: blue;
	border-radius: 50%;
}

.item6 {
	width: 5px;
	height: 5px;
	background: blue;
	border-radius: 50%;
}

.face:nth-child(1) {
	justify-content: center;
	align-items: center;
	transform: translateZ(50px);
}

.face:nth-child(2) {
	justify-content: space-around;
	align-items: center;
	transform: rotateX(-90deg) translateZ(50px);
}

.face:nth-child(3) {
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	transform: rotateY(90deg) translateZ(50px);
}

.face:nth-child(4) {
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transform: rotateY(-90deg) translateZ(50px);
}

.face:nth-child(4) .face_0 {
	width: 100px;
	height: 25px;
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
}

.face:nth-child(5) {
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transform: rotateX(90deg) translateZ(50px);
}

.face:nth-child(5) .face_0 {
	width: 100px;
	height: 25px;
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
}

.face:nth-child(6) {
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	transform: translateZ(-50px);
}

.face:nth-child(6) .face_0 {
	width: 100px;
	height: 25px;
	margin-top: 10px;
	display: flex;
	justify-content: space-around;
}
components/xiaowuzi-saizi
p {
	text-align: center;
}
button{
	background: red;
	color: #fff;
	width: 60%;
}
.view{
	font-weight: bold;
	font-family: "微软雅黑";
	margin-bottom: 80px;
}
</style>
