<template>
  <div>
    <div class="toc-affix">
      <d-anchor :get-container="getContainer"
                :offset-top="20">
        <d-anchor-link href="#basic"
                       title="基本"/>
        <d-anchor-link href="#demo"
                       title="示例"/>
        <d-anchor-link href="#demo1"
                       title="## 定义全局接口"/>
        <d-anchor-link v-show="false" href="#props"
                       title="属性"/>
        <d-anchor-link v-show="false" href="#events"
                       title="事件"/>
        <d-anchor-link v-show="false" href="#functions"
                       title="方法"/>
        <d-anchor-link v-show="false" href="#slots"
                       title="插槽"/>
      </d-anchor>
    </div>
    <div id="basic">
  <markdown :source="title"/>
    </div>
    <div class="markdown-body" id="demo">
      <span></span>
      <h2>示例代码</h2>
    </div>
    <demo1 id="demo1"/>
    
 </div>
</template>

<script lang="ts">
  import demo1 from './demo1/index.vue';


  import {Options, Vue} from 'vue-class-component';

  import title from './README.md';



  @Options({
    name: 'ComponentDemo',
    components: {
      demo1
    }
  })
  export default class ComponentDemo extends Vue {
    public title = title;

    public getContainer() {
      return document.getElementById('app-content');
    }
  }
</script>
<style lang="less" scoped>
  .toc-affix {
    width: 150px;
    position: fixed;
    top: 100px;
    right: 10px;
    bottom: 250px;
    z-index: 2000;
  }
</style>
