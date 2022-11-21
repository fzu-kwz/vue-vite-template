<template>
  <span class="back-top icon" v-show="visible" @click="backTop">
    <img
      src="@/assets/icon/back-top.svg"
      alt="back-top.svg"
      width="30"
      height="30"
    />
  </span>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(false);
const mainEle = ref<HTMLElement>();

const handleScroll = () => {
  const scrollTop = document.getElementsByTagName("main")[0].scrollTop;
  visible.value = scrollTop >= 200 ? true : false;
};

onMounted(() => {
  mainEle.value = document.getElementsByTagName("main")[0];
  mainEle.value.addEventListener("scroll", handleScroll, true);
});

onUnmounted(() => {
  mainEle.value?.removeEventListener("scroll", handleScroll);
});

const backTop = () => {
  mainEle.value?.scrollTo({
    top: 0,
    behavior: "smooth", // 平滑移动
  });
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
