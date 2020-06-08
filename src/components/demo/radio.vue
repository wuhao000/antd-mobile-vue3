<template>
  <a-layout>
    <m-list>
      <m-radio-popup-list v-model="value"
                          title="单选"
                          :options="options"></m-radio-popup-list>
      <m-radio-popup-list v-model="value2"
                          title="单选"
                          :options="options2"></m-radio-popup-list>
      <m-radio-item>单个</m-radio-item>
    </m-list>
  </a-layout>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Components'
  })
  export default class Components extends Vue {

    public value = null;
    public value2 = null;

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
