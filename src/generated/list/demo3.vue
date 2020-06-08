<template>
  <div class="demo">
    <code-box :code="code"
              :markdown="md">
    </code-box>
  </div>
</template>
<script lang="ts">
  import source from './demo3.txt';
  import md from '../../packages/list/demo/demo3.md';

  import {Options, Vue} from 'vue-class-component';
  import CodeBox from '../../components/code-box.vue';

  @Options({
    name: 'Demo3',
    components: {CodeBox}
 })
  export default class Demo3 extends Vue {
    public code = source;
    public md = md;
  }
</script>
