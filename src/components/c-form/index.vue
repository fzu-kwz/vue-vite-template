<template>
  <div class="form" :class="border ? 'border' : ''">
    <slot></slot>
    <div class="form-footer" v-if="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  footer: {
    type: Boolean,
    default: false,
  },
  border: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
