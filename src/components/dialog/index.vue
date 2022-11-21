<template>
  <teleport to="body">
    <div
      class="mask"
      :tabindex="-1"
      v-show="visible"
      @click.self="$emit('close')"
    >
      <div class="modal" :style="{ width: width + 'px' }">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot name="body"></slot>
        </div>
        <div class="footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: undefined,
  },
  inlineClose: {
    type: Boolean,
    default: undefined,
  },
});

defineEmits(["close"]);
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
