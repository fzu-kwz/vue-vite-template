<template>
  <div class="home">
    <Loading v-if="loading"></Loading>
    <div v-else>
      <p class="introduction">
        <span>A simple Vue + Ts + Vite template</span>
        <a href="https://github.com/fzu-kwz/vue-vite-template" target="_blank">
          <img src="@/assets/icon/github.png" alt="github.png" width="24" />
          <span>Github address</span>
        </a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Loading } from "k-vue3-comp";

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 500);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
