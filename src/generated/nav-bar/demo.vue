<template>
  <div>
    <demo-wrapper title="导航栏">
      <demo1/>
    </demo-wrapper>
  </div>
</template>
<script lang="ts">
  import DemoWrapper from '@/components/demo-wrapper.vue';
  import demo1 from '@/packages/nav-bar/demo/demo1.vue';

  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo',
    components: {demo1, DemoWrapper}
  })
  export default class Demo extends Vue {
  }
</script>
