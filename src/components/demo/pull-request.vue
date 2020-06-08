<template>
  <div style="height:100%">
    <m-pull-refresh activate-text="松开刷新"
                    deactivateText="取消刷新"
                    finishText="刷新完成"
                    :value="refreshing"
                    @refresh="refresh">
      <ul>
        <li v-for="i in 100"
            :key="i">
          111
        </li>
      </ul>
    </m-pull-refresh>
  </div>
</template>
<script lang="ts">
  import {Options, Vue} from 'vue-class-component';

  @Options({
    name: 'Components'
  })
  export default class Components extends Vue {

    public refreshing = false;

    public refresh() {
      this.refreshing = true;
      setTimeout(() => {
        this.refreshing = false;
      }, 2000);
    }
  }
</script>
<style lang="less" type="text/less">
</style>
