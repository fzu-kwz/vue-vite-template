<template>
  <Layout></Layout>
  <BackTop class="icon" :target="main" />
</template>

<script setup lang="ts">
import Layout from "@/layout/index.vue";
import { BackTop } from "burger-ui";

const main = document.getElementsByName("main")[0];
</script>

<style lang="less" scoped></style>
