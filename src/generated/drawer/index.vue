<template>
  <div>
    <div id="basic">
      <markdown :source="title"/>
    </div>
    <div class="markdown-body m-b" id="demo">
      <span></span>
      <h2>示例代码</h2>
    </div>
    <demo1 id="demo1"/>
    <demo2 id="demo2"/>
    <div class="markdown-body" id="props">
      <span></span>
      <h2>属性说明</h2>
    </div>
    <markdown :source="props"/>
 </div>
</template>

<script lang="ts">
  import demo1 from './demo1.vue';
  import demo2 from './demo2.vue';
  
  
  import Component from 'vue-class-component';
  import Drawer from '@/packages/drawer';
  import title from '../../packages/drawer/demo/README.md';
  import props from '../../packages/drawer/demo/props.md';

  Vue.use(Drawer);
  @Options({
    name: 'ComponentDemo',
    components: {
      demo1, demo2
    }
  })
  export default class ComponentDemo extends Vue {
    public title = title;
    public props = props;

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
    z-index: 500;
  }
</style>
