<template>
  <div class="demo">
    <span v-time="time"></span>
  </div>
</template>
<script lang="ts">

  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo1'
  })
  export default class Demo1 extends Vue {
    public time = new Date();
  }
</script>
