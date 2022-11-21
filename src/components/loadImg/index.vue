<template>
  <img
    ref="img"
    :data-src="url"
    src="@/assets/img/loading.gif"
    alt="loading-img"
  />
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  onUnmounted,
} from "vue";

defineProps({
  url: {
    type: String,
    default: undefined,
  },
});

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

// 窗口视高
const height = window.innerHeight;

const lazyload = (img: HTMLElement) => {
  // 图片距离顶部高度小于视高，即图片进入可视范围
  if (img.getBoundingClientRect().top < height) {
    setTimeout(() => {
      img.setAttribute("src", img.getAttribute("data-src") as string);
    }, 500);
  }
};

onMounted(() => {
  const img = proxy?.$refs["img"] as HTMLElement;
  const main = document.getElementsByTagName("main")[0] as HTMLElement;
  if (img.getBoundingClientRect().top < height) {
    img.setAttribute("src", img.getAttribute("data-src") as string);
  }
  main.addEventListener("scroll", () => {
    lazyload(img);
  });
});

onUnmounted(() => {
  const img = proxy?.$refs["img"] as HTMLElement;
  const main = document.getElementsByTagName("main")[0] as HTMLElement;
  main.removeEventListener("scroll", () => {
    lazyload(img);
  });
});
</script>

<style scoped></style>
