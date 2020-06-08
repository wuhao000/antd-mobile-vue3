<template>
  <a-layout>
    <a-layout-header id="app-header">
      <ui-header/>
    </a-layout-header>
    <a-layout id="app-body">
      <a-layout-sider v-show="!isDemo"
                      id="app-nav"
                      width="220px">
        <left-nav :menu-list="routersName"></left-nav>
      </a-layout-sider>
      <a-layout-content :id="(!$route.meta || $route.meta.hideNav !== true) ? 'app-content' : ''">
        <router-view/>
      </a-layout-content>
      <a-layout-sider style="padding: 0 0 0 10px;">
        <iframe v-if="componentName"
                height="512px"
                width="375px"
                :src="`/demo/mobile/${componentName}`">
        </iframe>
      </a-layout-sider>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
  import {routes} from '@/router';
  import {Options, Vue} from 'vue-class-component';
  import {Watch} from 'vue-property-decorator';
  import LeftNav from './left-nav.vue';

  @Options({
    components: {
      LeftNav
    }
  })
  export default class App extends Vue {
    private componentName: string = null;

    get isDemo() {
      return this.$route.path.startsWith('/demo');
    }

    get routersName() {
      return routes.find(it => it.name === 'site').children;
    }

    @Watch('$route', {immediate: true})
    public routeChanged(route: RouteConfig) {
      if (route.path.startsWith('/mobile-components')) {
        this.componentName = 'm-' + route.path.replace('/mobile-components/', '');
      } else {
        this.componentName = null;
      }
    }

  }
</script>
<style lang="less">
  @import "../assets/styles/common";
  @import "../assets/styles/custom";
  @import "~ant-design-vue/es/style/themes/default";

  body {
    background: @body-background;
  }

  #app-header {
    height: 60px;
  }

  #app-body {
    padding: @padding-xs;
  }

  .ant-layout {
    height: 100%;

    &, &-header, &-sider, &-footer, &-content {
      background: transparent;
      padding: 0;
    }

    &-header {
      line-height: 1;
    }

    &-header, &-footer {
      height: auto;
    }

    &-sider {
      & > &-children {
        overflow: auto;
      }
    }

    &-content {
      flex: 1;
      overflow: auto;
    }
  }

  #app-content {
    background: white;
    padding: @padding-sm 30px 144px @padding-lg;
  }

  p {
    margin: 0;
    padding: 0;
  }

  #app-nav {
    background: white;
    margin-right: @padding-xs;
  }

  .bg-white {
    background: white;
  }

  .demo {
    margin: @padding-md 0;
  }
</style>
