<template>
  <a-menu id="nav-list"
          mode="inline">
    <template v-for="item in menuList">
      <a-sub-menu v-if="item.children && item.children.length"
                  :key="item.name">
        <template v-slot:title>
          <div class="category-title">{{item.name}}
          </div>
        </template>
        <a-menu-item v-for="sub in item.children"
                     :key="sub.name"
                     @click="handleClick(sub)">{{sub.name}}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else
                   class="category-title"
                   :key="item.name"
                   @click="handleClick(item)">{{item.name}}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script lang="ts">
  import {useRouter} from 'vue-router';

  export default {
    name: 'LeftNav',
    props: {
      menuList: Object
    },
    setup() {
      const router = useRouter();
      return {
        handleClick(route) {
          router.push(route);
        }
      };
    }
  };
</script>
<style lang="less">
  #nav-list {
    .category-title {
      color: black;
      font-family: 'Songti SC', serif;
      font-weight: bold;
    }
  }
</style>
