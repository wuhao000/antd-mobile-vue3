<template>
  <div>
  </div>
</template>
<script lang="ts">
  import DemoWrapper from '@/components/demo-wrapper.vue';

  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo',
    components: {DemoWrapper}
  })
  export default class Demo extends Vue {
  }
</script>
