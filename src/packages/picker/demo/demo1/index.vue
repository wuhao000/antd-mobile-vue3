<template>
  <div>
    <m-picker v-model="value"
              title="测试"
              placeholder="请选择"
              :data="data">
      <m-list-item>测试</m-list-item>
    </m-picker>
    <m-picker v-model="value2"
              :cols="1"
              title="测试"
              placeholder="请选择"
              :data="data2">
      <m-list-item>选择颜色</m-list-item>
    </m-picker>
  </div>
</template>
<script lang="tsx">
  import getColors from '@/packages/picker/demo/demo1/colors';
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public data = [{
      label: '江苏省',
      value: 'JiangSu',
      children: [{
        label: '南京市',
        value: 'NanJing'
      }, {
        label: '苏州',
        value: 'SuZhou'
      }]
    }];
    public value2 = null;
    public data2 = getColors(this.$createElement);
    public value = null;
  }
</script>
<style scoped lang="less">
</style>
