<template>
  <div>
    <m-button @click="switchAnimation('slideInDown')">切换动画</m-button>
    <ul class="animated"
        :class="{[animation] : showAnimation}"
        :style="style">
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {

    public animation = '';
    public showAnimation = false;

    get style() {
      return {
        background: 'darkseagreen',
        display: this.showAnimation ? 'block' : 'none',
        position: 'fixed',
        width: '100%',
        top: '50px'
      };
    }

    public switchAnimation(animation) {
      this.animation = animation;
      this.showAnimation = !this.showAnimation;
    }
  }
</script>
<style scoped lang="less">
  .animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
  }

  @-webkit-keyframes slideInUp {
    from {
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideInDown {
    from {
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
  }
</style>
