<template>
  <div class="record" v-show="routeArray.length !== 0">
    <div
      class="record-box"
      v-for="(item, index) in routeArray"
      :key="item.path"
    >
      <div class="record-item">
        <router-link
          class="record-item-link nav-link"
          :class="
            store.state.currentPath === item.path
              ? 'record-item-link-active'
              : ''
          "
          :to="item.path"
          :title="item.path.split('/').join('-').replace('-', '')"
        >
          {{ item.name }}
        </router-link>
        <button class="record-item-delete" @click="recordDelete(item.path)">
          ×
        </button>
      </div>
      <span class="record-item-separator" v-if="index !== routeArray.length - 1"
        >|</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { Route } from "@/types";
import { useStore } from "vuex";

const store = useStore();

const routeArray: Array<Route> = store.state.routeArray;

const recordDelete = (name: string) => {
  store.commit("routeArrayDelete", name);
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
