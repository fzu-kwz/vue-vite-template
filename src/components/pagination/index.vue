<template>
  <div class="pagination" v-if="total !== 0">
    <input
      class="pagination-icon pagination-icon-before"
      type="button"
      value="<"
      @click="goToBefore"
      :disabled="current === 1"
    />
    <button
      class="ellipsis"
      @click="goToBeforeMore"
      v-show="total > 5 && current > 3"
    >
      «
    </button>
    <div
      class="pagination-num"
      v-for="item in total"
      :key="item"
      :class="current === item ? 'active' : ''"
      @click="goTo(item)"
      v-show="currentEdge.indexOf(item) !== -1"
    >
      {{ item }}
    </div>
    <button
      class="ellipsis"
      @click="goToNextMore"
      v-show="total > 5 && total - current >= 3"
    >
      »
    </button>
    <input
      class="pagination-icon pagination-icon-next"
      type="button"
      value=">"
      @click="goToNext"
      :disabled="current === total"
    />
    <div v-show="showJump">
      <input
        class="pagination-jump"
        type="text"
        v-model="jump"
        @keyup.enter="jumpTo(jump)"
      />
      <button
        class="pagination-jump-btn"
        @click="jumpTo(jump)"
        :disabled="jump === ''"
      >
        Go
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

// 当前页码
const current = ref(1);

// 跳转页码
const jump = ref("");

const props = defineProps({
  showJump: {
    type: Boolean,
    default: undefined,
  },
  total: {
    type: Number,
    default: 20,
  },
});

const emits = defineEmits(["current"]);

const currentEdge = computed(() => {
  const total = props.total;
  if (total <= 5) {
    return [1, 2, 3, 4, 5];
  } else {
    if (current.value < 3) {
      return [1, 2, 3, 4, 5];
    }
    if (total - current.value < 3) {
      return [total - 4, total - 3, total - 2, total - 1, total];
    }
  }
  return [
    current.value - 2,
    current.value - 1,
    current.value,
    current.value + 1,
    current.value + 2,
  ];
});

const goTo = (page: number) => {
  current.value = page;
};

const goToBefore = () => {
  current.value === 1 ? "" : (current.value -= 1);
};

const goToBeforeMore = () => {
  current.value = currentEdge.value[0];
};

const goToNext = () => {
  current.value === props.total ? "" : (current.value += 1);
};

const goToNextMore = () => {
  current.value = currentEdge.value[currentEdge.value.length - 1];
};

const jumpTo = (jump: string) => {
  const page = parseInt(jump);
  page > props.total
    ? alert(`页码不超过${props.total}！`)
    : page < 1
    ? alert("页码不能小于1")
    : (current.value = page);
};

watch(current, () => {
  emits("current", current.value);
});
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
