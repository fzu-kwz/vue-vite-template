<template>
  <div class="home">
    <Loading v-if="loading" :target="main"></Loading>
    <div v-else>
      <Empty text=""></Empty>
      <Card style="padding: 10px; display: inline-block;">
        <p class="introduction">
          <Alert
            type="warning"
            style="font-size: 20px; margin-bottom: 10px;"
            center
          >
            Vue + Ts + Vite template
          </Alert>
          <Alert type="danger" style="margin-bottom: 10px;">
            <a
              href="https://github.com/fzu-kwz/vue-vite-template"
              target="_blank"
            >
              <img src="@/assets/icon/github.png" alt="github.png" width="24" />
              <span>vue-vite-template</span>
            </a>
          </Alert>
          <Alert type="primary">
            <a href="http://124.223.76.46:9000/" target="_blank">
              <img src="/favicon.ico" alt="github.png" width="24" />
              <span>UI</span>
            </a>
          </Alert>
        </p>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Alert, Card, Empty, Loading } from "burger-ui";

const main = document.getElementsByTagName("main")[0];
const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 1000);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
