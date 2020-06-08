<template>
  <div>
    {{value}}
    <m-search-bar v-model="value"/>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public value: string = '';
  }
</script>
<style scoped lang="less">
</style>
