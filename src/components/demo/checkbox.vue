<template>
  <a-layout>
    <m-list>
      <m-checkbox-popup-list v-model="value"
                             title="复选"
                             :options="options"></m-checkbox-popup-list>
      <m-checkbox-popup-list v-model="value2"
                             title="复选"
                             :options="options2"></m-checkbox-popup-list>
      <m-checkbox-item>单个</m-checkbox-item>
    </m-list>
  </a-layout>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Components'
  })
  export default class Components extends Vue {

    public value = [];
    public value2 = [];

    get options() {
      const options = [];
      for (let i = 0; i < 100; i++) {
        options.push({label: '选项' + i, value: i});
      }
      return options;
    }

    get options2() {
      const options = [];
      for (let i = 0; i < 5; i++) {
        options.push({label: '选项' + i, value: i});
      }
      return options;
    }
  }
</script>
<style lang="less" type="text/less">
</style>
