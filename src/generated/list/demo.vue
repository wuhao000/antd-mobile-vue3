<template>
  <div>
    <demo-wrapper title="基本">
      <demo1/>
    </demo-wrapper>
		<demo-wrapper title="基本">
      <demo2/>
    </demo-wrapper>
		<demo-wrapper title="可输入列表">
      <demo3/>
    </demo-wrapper>
  </div>
</template>
<script lang="ts">
  import DemoWrapper from '@/components/demo-wrapper.vue';
  import demo1 from '@/packages/list/demo/demo1.tsx';
  import demo2 from '@/packages/list/demo/demo2.tsx';
  import demo3 from '@/packages/list/demo/demo3.tsx';

  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Demo',
    components: {demo1, demo2, demo3, DemoWrapper}
  })
  export default class Demo extends Vue {
  }
</script>
