<template>
  <div class="form-item">
    <label class="form-item-label" :style="{ width: width + 'px' }">{{
      labelText
    }}</label>
    <div class="form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  labelText: {
    type: String,
    default: undefined,
  },
  width: {
    type: String,
    default: undefined,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
