<template>
  <aside>
    <nav>
      <router-link
        v-for="item in routes"
        :key="item.path"
        class="aside-nav-link nav-link"
        :to="item.path"
        :title="item.name"
        :data-attr="item.name"
      ></router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { Route } from "@/types";

defineProps({
  routes: Array<Route>,
  default: () => []
})
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
