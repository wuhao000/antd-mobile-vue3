<template>
  <div class="home">
    <m-input v-model="form.value"/>
    <markdown :source="content"></markdown>
    <markdown style="margin-top:50px;"
              :source="version"></markdown>
  </div>
</template>
<script lang="ts">
  import '@/styles/github-markdown.less';
  import {Options, Vue} from 'vue-class-component';
  import version from '../documents/change-log/README.md';
  import md from '../documents/develop.md';
  import MInput from '@/packages/input';

  @Options({
    name: 'Home',
    components: {
      MInput
    }
  })
  export default class Home extends Vue {
    public content: any = md;
    public form = {};
    public version: any = version;

    public mounted() {
      this.form = {value: '2'};
    }
  }
</script>

