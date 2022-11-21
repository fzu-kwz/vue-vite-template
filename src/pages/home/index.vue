<template>
  <div class="home">
    <Loading v-if="loading"></Loading>
    <div v-else>
      <p class="introduction">
        A simple Vue + Ts + Vite template
      </p>
      <p class="more">
        <a href="https://github.com/fzu-kwz" target="_blank">
          <img src="@/assets/img/github.png" alt="github.png" />
          <span>GitHub Address</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Loading from "@/components/loading/index.vue";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 500);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
