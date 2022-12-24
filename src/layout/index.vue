<template>
  <Container class="vertical" style="height: 100vh;">
    <Header>
      <Menu class="header-nav">
        <MenuItem
          class="header-link"
          v-for="item in headerRoutes"
          :route="item.path"
        >
          <template #title>{{ item.name }}</template>
        </MenuItem>
      </Menu>
      <img
        class="icon"
        @click="navVisible = true"
        src="@/assets/icon/menu.svg"
        alt="menu.svg"
        width="30"
        height="30"
      />
    </Header>
    <Container style="height: calc(100% - 48px);">
      <Aside v-if="route.path !== '/home'" :width="100">
        <Menu>
          <MenuItem v-for="item in asideRoutes" :route="item.path">
            <template #title>{{ item.name }}</template>
          </MenuItem>
        </Menu>
      </Aside>
      <Main style="position: relative;">
        <router-view></router-view>
      </Main>
    </Container>
  </Container>

  <Drawer
    v-model:visible="navVisible"
    position="top"
    :width="100"
    :show-close="false"
  >
    <Menu style="background-color: #fff; text-align: center;">
      <MenuItem
        v-for="item in headerRoutes"
        :route="item.path"
        @click="navVisible = false"
      >
        <template #title>{{ item.name }}</template>
      </MenuItem>
    </Menu></Drawer
  >
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";

import {
  Header,
  Main,
  Aside,
  Container,
  Menu,
  MenuItem,
  Drawer,
} from "burger-ui";

const route = useRoute();

const navVisible = ref(false);

const headerRoutes = reactive([
  { path: "/home", name: "home" },
  { path: "/about", name: "about" },
]);
const asideRoutes = reactive([
  { path: "/about/upload", name: "upload" },
  { path: "/about/wall", name: "wall" },
]);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
