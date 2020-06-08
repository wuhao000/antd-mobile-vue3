<template>
  <div>
    <m-range v-model="value"
             :max="100"
             :min="0"/>
    {{value}}
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public value = [1, 2];
  }
</script>
<style scoped lang="less">
</style>
