<template>
  <div class="demo">
    <code-box :code="code"
              :markdown="md">
    </code-box>
  </div>
</template>
<script lang="ts">
  import source from './demo6.txt';
  import md from '../../packages/tabs/demo/demo6.md';

  import {Options, Vue} from 'vue-class-component';
  import CodeBox from '../../components/code-box.vue';

  @Options({
    name: 'Demo6',
    components: {CodeBox}
 })
  export default class Demo6 extends Vue {
    public code = source;
    public md = md;
  }
</script>
