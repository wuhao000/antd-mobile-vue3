<template>
  <div>
    <demo/>
  </div>
</template>
<script lang="ts">
  import demo from '@/packages/global/demo/index.vue';

  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Global',
    components: {demo}
  })
  export default class Global extends Vue {

  }
</script>
