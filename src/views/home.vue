<template>
  <div class="home">
    <markdown :source="content"></markdown>
  </div>
</template>
<script lang="ts">
  import Markdown from '@/components/markdown.vue';
  import '@/styles/github-markdown.less';
  import {defineComponent} from 'vue';
  import md from './../../README.md';

  export default defineComponent({
    name: 'Home',
    components: {
      Markdown
    },
    setup() {
      return {
        content: md
      };
    }
  });
</script>

