<template>
  <view class="dice-container" @click="toggleLock">
    <image :src="diceImage" class="dice-image" />
    <text v-if="locked" class="locked">🔒</text>
  </view>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    },
    locked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    diceImage() {
      return `/static/images/dice-${this.value}.png`;
    }
  },
  methods: {
    toggleLock() {
      this.$emit('locked', !this.locked);
    }
  }
};
</script>

<style>
.dice-container {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 5px;
}
.dice-image {
  width: 100%;
  height: 100%;
}
.locked {
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 20px;
}
</style>