<template>
  <div>
    <d-button @click="show = !show">显示</d-button>
    <m-popup v-model="show">
      <div>22222222</div>
    </m-popup>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public show = true;
  }
</script>
<style lang="less" scoped>
</style>
