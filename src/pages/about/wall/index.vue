<template>
  <Skeleton v-if="photos.length === 0"></Skeleton>
  <div class="photo-wall" v-if="photos.length !== 0">
    <div
      class="photo-wall-item"
      v-for="item in photos"
      :key="item.id"
      @click="photoClick(item.url)"
    >
      <LazyLoadImg :src="item.url" :scroll-node="scrollNode"></LazyLoadImg>
    </div>
  </div>
  <Dialog :visible="dialogVisible" @close="dialogVisible = false">
    <template v-slot:body>
      <img style="width: 100%; height: 100%;" :src="currentPhoto" alt="photo" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from "vue";

import { LazyLoadImg } from "k-vue3-comp";
import Skeleton from "@/components/skeleton/index.vue";
import Dialog from "@/components/dialog/index.vue";

import { getPhotoList } from "@/api/photo";
import { Paging, Photo } from "@/types";

const scrollNode = document.getElementsByTagName("main")[0];

const dialogVisible = ref(false);
const currentPhoto = ref();
const paging: Paging = reactive({
  page: 1,
  size: 10,
  total: 0,
  totalPage: 0,
});
const photos: Array<Photo> = reactive([]);

const photoClick = (url: string) => {
  dialogVisible.value = true;
  currentPhoto.value = url;
};

getPhotoList(paging.page, paging.size).then((res) => {
  paging.total = res.data.total;
  paging.totalPage = res.data.totalPage;
  photos.push(...res.data.list);
});

const handle = (): any => {
  const main = document.getElementsByTagName("main")[0];
  const scrollTop = main.scrollTop;
  const viewHeight = main.clientHeight;
  const scrollHeight = main.scrollHeight;
  if (Math.abs(scrollTop + viewHeight - scrollHeight) <= 1) {
    paging.page++;
    if (paging.page <= paging.totalPage) {
      getPhotoList(paging.page, paging.size).then((res) => {
        photos.push(...res.data.list);
      });
    }
  }
};

onMounted(() => {
  const main = document.getElementsByTagName("main")[0];
  main.addEventListener("scroll", handle);
});

onUnmounted(() => {
  const main = document.getElementsByTagName("main")[0];
  main.removeEventListener("scroll", handle);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
