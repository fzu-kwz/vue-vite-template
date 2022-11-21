<template>
  <button class="default" :class="type + ' ' + size">
    <slot>默认按钮</slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "",
  },
  size: {
    type: String,
    default: "",
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
