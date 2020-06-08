<template>
  <div>
    <m-image-picker v-model="files"/>
  </div>
</template>
<script lang="ts">

  import {Options, Vue} from 'vue-class-component';
  import ImagePicker from '../../index';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public files = [];

    public onChange(files) {
      this.files = files;
    }
  }
</script>
<style scoped lang="less">
</style>
