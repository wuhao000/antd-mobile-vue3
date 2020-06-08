<template>
  <div v-hljs
       v-html="source"
       class="markdown-body">
  </div>
</template>
<script lang="ts">

  import {Options, Vue} from 'vue-class-component';
  import {Prop} from 'vue-property-decorator';

  @Options({
    name: 'Markdown'
  })
  export default class Markdown extends Vue {
    @Prop({type: String})
    public source: string;
  }
</script>
