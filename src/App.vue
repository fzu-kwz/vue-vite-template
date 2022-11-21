<template>
  <Layout></Layout>
  <BackTop />
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import Layout from "@/layout/index.vue";
import BackTop from "@/components/back-top/index.vue";

const store = useStore();
const route = useRoute();

watch(route, (newRoute) => {
  store.commit("updatecurrentPath", newRoute.path);
  store.commit("routeArrayPush", { path: newRoute.path, name: newRoute.name });
});
</script>

<style lang="less" scoped></style>
