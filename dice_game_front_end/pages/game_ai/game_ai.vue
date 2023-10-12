<template>
		<view class="container">
			<view class="title">人机对战</view>
			<view class="game-board">
				<view class="player-dices left">
					<dice v-for="n in numList" :key="n" :value="player1DiceValues[n-1]"
						:locked="player1LockedDices[n-1]" @locked="updateLockStatus(1, n, $event)">
					</dice>
				</view>
				<view class="player-dices right">
					<dice v-for="n in numList" :key="n" :value="player2DiceValues[n-1]"
						:locked="player2LockedDices[n-1]">
					</dice>
				</view>
			</view>
			<view class="game-info">
				<text>局数: {{ currentBureauNum }}/{{bureauNum}}</text>
				<text>当前轮数: {{ currentRound }}</text>
				<text>玩家得分: {{ player1Score }}</text>
				<text>机器得分: {{ player2Score }}</text>
			</view>
			<button v-if="currentPlayer === 1" class="btn" @click="rollDices">玩家投掷骰子</button>
			<button v-if="currentPlayer === 1 && !showMultiplierDialog" class="btn"
				@click="confirmLock1">玩家完成锁定</button>
			<button v-if="showMultiplierDialog && currentPlayer === 1" @click="setMultiplier(0)"
				class="btn">倍率 0</button>
			<button v-if="showMultiplierDialog && currentPlayer === 1" @click="setMultiplier(1)"
				class="btn">倍率 1</button>
			<button v-if="showMultiplierDialog && currentPlayer === 1" @click="setMultiplier(2)"
				class="btn">倍率 2</button>
			<button v-if="showMultiplierDialog && currentPlayer === 1" @click="setMultiplier(3)"
				class="btn">倍率 3</button>
			<button class="btn" @click="navigateBack">重新开始新的一局</button>
	</view>
</template>

<script>
	import Dice from '@/components/dice/dice.vue';

	export default {
		components: {
			Dice
		},
		onLoad(option) {
			if (option.bureauNum) {
				this.bureauNum = +option.bureauNum
			}
		},
		data() {
			return {
				currentRound: 1,
				numList: [1, 2, 3, 4, 5],
				currentPlayer: 1,
				player1Score: 100,
				player2Score: 100,
				player1DiceValues: [1, 1, 1, 1, 1],
				player2DiceValues: [1, 1, 1, 1, 1],
				player1LockedDices: [false, false, false, false, false],
				player2LockedDices: [false, false, false, false, false],
				showMultiplierDialog: false,
				player1Multiplier: 1,
				player2Multiplier: 1,
				player1Multiplying: [], // 倍率数组
				isComputerOpponent: true,
				// 判断是否投掷过 投掷后不允许再次投掷
				isFlag: false,
				// 局数  默认1局
				bureauNum: 2,
				// 当前局数
				currentBureauNum: 1,
				// 筛子类型 默认为0 
				player1Type: 0,
				player2Type: 0,
			};
		},
		methods: {
			rollDices() {
				if (this.isFlag) return
				if (this.currentPlayer === 1) {
					this.isFlag = true
					this.player1DiceValues = this.player1DiceValues.map((value, index) => {
						return this.player1LockedDices[index] ? value : Math.floor(Math.random() *
							6) + 1;
					});
				}
				if (this.currentRound == 3) {
					this.computerPlay()
				}
			},
			confirmLock1() {
				if (this.currentRound == 3 || this.isFlag == false) return
				this.showMultiplierDialog = true;
			},
			countOccurrences(arr, val) {
				let result = arr.reduce((acc, curr) => (curr === val ? acc + 1 : acc), 0);
				console.log(result, val);
				return result
			},
			// 设置倍率
			setMultiplier(value) {
				if (this.currentRound < 3) {
					if (value === 0 && this.player1Multiplying.length) {
						// 多个倍率0 只加1 [0,0]  倍率和为1
						if (!this.player1Multiplying.includes(value)) {
							this.player1Multiplying.push(value)
						}
					} else this.player1Multiplying.push(value)

				}
				this.showMultiplierDialog = false;
				this.computerPlay()
				// console.log(this.calculateScore(this.player1DiceValues));
				// const score = this.calculateScore(this.player1DiceValues);
				// this.player1Score += score * this.player1Multiplier;
				// if (this.isComputerOpponent) {
				// 	setTimeout(() => this.computerPlay(), 1000);
				// } else {
				// 	this.currentPlayer = 2;
				// 	this.showMultiplierDialog = false;
				// }
			},
			computerPlay() {
				this.rollDicesForComputer();
				this.autoLockDices();

				// setTimeout(() => {
				// 	// const multiplier = this.autoChooseMultiplier();

				// }, 500);
			},
			rollDicesForComputer() {
				this.player2DiceValues = this.player2DiceValues.map((value, index) => {
					return this.player2LockedDices[index] ? value : Math.floor(Math.random() *
						6) + 1;
				});
				// 人机结束后 可以进行第二轮投掷
				this.isFlag = false
				if (this.currentRound == 3) {
					this.setMultiplierForComputer();
					return
				}
				// 人机结束后  当前轮次++
				this.currentRound++

			},
			autoLockDices() {
				this.player2LockedDices = this.player2DiceValues.map(value => {
					return value > 4;
				});
			},
			// autoChooseMultiplier() {
			// 	const score = this.calculateScore(this.player2DiceValues);
			// 	if (score > 50) {
			// 		return 3;
			// 	} else if (score > 30) {
			// 		return 2;
			// 	} else if (score > 10) {
			// 		return 1;
			// 	} else {
			// 		return 0;
			// 	}
			// },
			// 判断轮次是否结束  结束后先计算分数后判断局数是否为最后一局
			setMultiplierForComputer() {
				if (this.currentRound == 3) {
					let player1 = this.judgeType(this.player1DiceValues)
					let player2 = this.judgeType(this.player2DiceValues)
					uni.showLoading({
						title: `第${this.currentBureauNum}局分数计算中，请稍后`
					})
					setTimeout(() => {
						this.getDiceTypeAndScore(player1, player2)
					}, 1000)
					return
				}
				// this.player2Multiplier = value;
				// const score = this.calculateScore(this.player2DiceValues);
				// this.player2Score += score * this.player2Multiplier;
				this.showMultiplierDialog = false;
				this.currentPlayer = 1;
				// this.currentRound++;
			},
			// 获取骰子类型以及骰子点数 最后进行结算 1 玩家  2 人机
			getDiceTypeAndScore(dice1Values, dice2Values) {
				console.log(dice1Values, dice2Values, 'dice1Values,dice2Values');
				let differenceNum = dice1Values.score - dice2Values.score
				let multiplying = this.player1Multiplying.reduce((acc, cur) => {
					if (cur === 0) {
						acc++
					} else {
						acc += cur
					}
					return acc
				}, 0)
				if (differenceNum > 0) {
					this.player1Score = this.player1Score + differenceNum * multiplying
					this.player2Score = this.player2Score - differenceNum * multiplying
				} else {
					this.player1Score = this.player1Score + differenceNum * multiplying
					this.player2Score = this.player2Score - differenceNum * multiplying
				}
				// this.resetDice()

				if (this.currentBureauNum == this.bureauNum) {
					setTimeout(() => {
						uni.hideLoading()
						uni.showToast({
							title: '对局已结束！',
							icon: 'none'
						})
						this.hideButton()
					}, 1000)
					return
				}
				if (this.player1Score <= 0 || this.player2Score <= 0) {
					uni.hideLoading()
					uni.showToast({
						title: '玩家分数不足对局结束！',
						icon: 'none',
						duration: 3000
					})
					this.hideButton()
					return
				}
				this.currentBureauNum++
				this.currentRound = 1
				this.showMultiplierDialog = false;
				this.currentPlayer = 1;
				uni.hideLoading()
				this.resetDice()
			},
			// calculateScore(diceValues) {
			// 	let score = 0;
			// 	const sortedDice = [...diceValues].sort();
			// 	const uniqueDice = [...new Set(sortedDice)];
			// 	console.log('sortedDice', sortedDice);
			// 	console.log('uniqueDice', uniqueDice)
			// 	const occurrences = uniqueDice.map(value => this.countOccurrences(sortedDice,
			// 		value));
			// 	console.log('occurrences', occurrences)
			// 	const double = occurrences.filter(o => o === 2).length;
			// 	const triple = occurrences.filter(o => o === 3).length;
			// 	const quadruple = occurrences.includes(4);
			// 	const quintuple = occurrences.includes(5);

			// 	if (quintuple) {
			// 		return 100; // 五连
			// 	} else if (quadruple) {
			// 		return 40; // 四连
			// 	} else if (triple && double) {
			// 		return 20; // 葫芦
			// 	} else if (triple) {
			// 		score += 10; // 三连
			// 	}

			// 	score += double * 10; // 双对

			// 	if (sortedDice.join(',') === '1,2,3,4,5' || sortedDice.join(',') === '2,3,4,5,6') {
			// 		score += 60; // 大顺子
			// 	} else if (uniqueDice.length === 5) {
			// 		score += 30; // 小顺子
			// 	}

			// 	return score;
			// },
			updateLockStatus(player, diceIndex, status) {
				if (player === 1) {
					this.$set(this.player1LockedDices, diceIndex - 1, status);
				} else {
					this.$set(this.player2LockedDices, diceIndex - 1, status);
				}
			},
			updateDiceValue(player, diceIndex, value) {
				if (player === 1) {
					this.player1DiceValues[diceIndex - 1] = value;
				} else {
					this.player2DiceValues[diceIndex - 1] = value;
				}
			},
			navigateBack() {
				// 你的返回逻辑
				uni.navigateBack();
			},
			// 判断骰子类型 1双对 2三连 3葫芦 4四连 5五连 6小顺 7大顺 
			judgeType(current) {
				const sortedDices = current.sort();
				const uniqueDices = [...new Set(sortedDices)];
				let duplicatedElements = {}
				switch (uniqueDices.length) {
					case 1:
						// 五连
						duplicatedElements[uniqueDices[0]] = 5
						duplicatedElements.type = 5
						duplicatedElements.score = uniqueDices[0] * 5 + 100
						break;
					case 2:
						duplicatedElements = this.setForEach(uniqueDices, current, uniqueDices.length)
						break;
					case 3:
						duplicatedElements = this.setForEach(uniqueDices, current, uniqueDices.length)
						break;
					case 4:
						duplicatedElements.type = 0
						duplicatedElements.score = current.reduce((acc, cur) => acc + cur, 0)
						break;
					case 5:
						// 大顺子
						if (uniqueDices[uniqueDices.length - 1] - uniqueDices[0] == 4) {
							duplicatedElements.type = 7
							duplicatedElements.score = current.reduce((acc, cur) => acc + cur, 0) +
								60
						} else if (uniqueDices[uniqueDices.length - 2] - uniqueDices[0] == 3) {
							// 小顺子
							duplicatedElements.type = 6
							duplicatedElements.score = current.reduce((acc, cur) => acc + cur, 0) +
								30
						} else {
							duplicatedElements.type = 0
							duplicatedElements.score = current.reduce((acc, cur) => acc + cur, 0)
						}
						break;
				}

				return duplicatedElements

			},
			// 骰子类型出现两对 三连 length 3   四连 葫芦 length 2
			setForEach(setArr, current, length) {
				let duplicatedElements = {}
				let score = 0
				for (const ele of setArr) {
					let repetLength = current.filter(item => ele == item).length
					if (repetLength > 1) {
						score += ele * repetLength
					} else score += ele

					// 判断类型  2 包括 葫芦和四连  3包括 三连和两对
					if (length == 2) {
						if (repetLength == 2) {
							duplicatedElements.type = 3
						} else if (repetLength == 4) {
							duplicatedElements.type = 4
						}
					} else if (length == 3) {
						if (repetLength == 3) {
							duplicatedElements.type = 2
						} else if (repetLength == 2) {
							duplicatedElements.type = 1
						}
					}
				}
				if (duplicatedElements.type == 1) {
					score += 10
				} else if (duplicatedElements.type == 2) {
					score += 10
				} else if (duplicatedElements.type == 3) {
					score += 20
				} else if (duplicatedElements.type == 4) {
					score += 40
				}
				duplicatedElements.score = score
				return duplicatedElements
			},
			// 重置骰子
			resetDice() {
				this.player1DiceValues = [1, 1, 1, 1, 1]
				this.player2DiceValues = [1, 1, 1, 1, 1]
				this.player1LockedDices = [false, false, false, false, false, ]
				this.player2LockedDices = [false, false, false, false, false, ]
			},
			hideButton() {
				this.currentPlayer = false
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
		padding: 20px;
		background-color: #f0f0f0;
		/* background-color: transparent; */
		width: 100%;
		box-sizing: border-box;
	}

	.title {
		font-size: 24px;
		margin-bottom: 20px;
	}

	.game-board {
		width: 100%;
		height: 300px;
		background-color: #fff;
		margin-bottom: 20px;
		display: flex;
	}

	.game-info {
		margin-bottom: 20px;
	}

	.btn {
		margin: 10px;
		padding: 10px 20px;
		background-color: #4CAF50;
		color: white;
		border: none;
		border-radius: 5px;
	}

	.player-dices.left {
		width: 50%;
	}

	.player-dices.right {
		width: 50%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
	}
</style>