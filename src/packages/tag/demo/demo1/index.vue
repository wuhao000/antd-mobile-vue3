<template>
  <div>
    <m-tag>Basic</m-tag>
    <m-tag selected>Selected</m-tag>
    <m-tag disabled>Disabled</m-tag>
    <m-tag closable>Closable</m-tag>
    <m-tag closable
           @close="close">Closable
    </m-tag>
  </div>
</template>
<script lang="ts">

  import {Options, Vue} from 'vue-class-component';
  import Tag from '../../index';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public close() {
      this.$message.success('close');
    }
  }
</script>
<style scoped lang="less">
</style>
