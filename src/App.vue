<template>
  <Layout></Layout>
  <BackTop :back-top-node="backTopNode" />
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import Layout from "@/layout/index.vue";
import { BackTop } from "k-vue3-comp";

const store = useStore();
const route = useRoute();

const backTopNode = ref();
onMounted(() => {
  backTopNode.value = document.getElementsByTagName("main")[0];
});

watch(route, (newRoute) => {
  store.commit("updatecurrentPath", newRoute.path);
  store.commit("routeArrayPush", { path: newRoute.path, name: newRoute.name });
});
</script>

<style lang="less" scoped></style>
