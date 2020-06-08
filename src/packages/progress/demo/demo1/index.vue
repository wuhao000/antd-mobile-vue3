<template>
  <div style="position: relative">
    <m-progress position="normal"
                :percent="80"/>
    <m-progress :percent="80"/>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    // TODO
  }
</script>
<style scoped lang="less">
</style>
