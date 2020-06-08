<template>
  <div>
    <demo1-component/>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';
  import Demo1Component from './demo1';

  @Options({
    name: 'Demo1',
    components: {Demo1Component}
  })
  export default class Demo1 extends Vue {
    // TODO
  }
</script>
<style scoped lang="less">
</style>
