<template>
  <Container class="vertical" style="height: 100vh;">
    <Header style="height: 48px;" :routes="headerRoutes"></Header>
    <Container style="height: calc(100vh - 48px);">
      <Aside
        v-show="store.getters.getFirstPath === 'about'"
        :routes="asideRoutes"
      ></Aside>
      <Main>
        <template v-slot:record>
          <NavigationRecord />
        </template>
      </Main>
    </Container>
  </Container>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import { reactive } from "vue";

import Container from "@/layout/container/index.vue";
import Aside from "@/layout/aside/index.vue";
import Main from "@/layout/main/index.vue";
import Header from "@/layout/header/index.vue";
import NavigationRecord from "@/components/navigation-record/index.vue";

import { Route } from "@/types";

const store = useStore();

const headerRoutes: Array<Route> = reactive([
  { path: "/home", name: "home" },
  { path: "/about", name: "about" },
]);

const asideRoutes: Array<Route> = reactive([
  { path: "/about/upload", name: "upload" },
  { path: "/about/wall", name: "wall" },
]);
</script>

<style scoped></style>
