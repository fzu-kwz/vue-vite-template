<template>
  <div
    class="c-select"
    tabindex="-1"
    @click.self="display = !display"
    ref="select"
  >
    <div class="value">{{ modelValue }}</div>
    <div class="close" v-if="allowClear" v-show="close" @click="clear">
      <img
        src="@/assets/icon/delete.svg"
        alt="delete.svg"
        width="12"
        height="12"
      />
    </div>
    <ul class="c-select-option" v-show="display">
      <li
        v-for="item in options"
        :key="item.value"
        @click="valueChange($event, item.value)"
        :class="current === item.value ? 'active' : ''"
        :title="item.name"
      >
        {{ item.name }}
      </li>
      <Empty v-if="options.length === 0"></Empty>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  ComponentInternalInstance,
  getCurrentInstance,
  onMounted,
  ref,
  watch,
} from "vue";
import Empty from '@/components/empty/index.vue';
import { Option } from "@/types";

const props = defineProps({
  modelValue: {
    type: String,
    default: undefined,
  },
  options: {
    type: Array<Option>,
    default: () => {
      return [];
    },
  },
  allowClear: {
    type: Boolean,
    default: undefined,
  },
});

// 显示选项
const display = ref(false);

// 显示清空按钮
const close = ref(false);

const { proxy } = getCurrentInstance() as ComponentInternalInstance;

// 下拉框元素
const select = ref<HTMLElement>();

// 选中值
const current = ref("");

// 更新v-model绑定的值
const emits = defineEmits(["update:model-value"]);
const valueChange = (event: Event, value: string) => {
  emits("update:model-value", value);
  display.value = false;
};

// 失去焦点事件
onMounted(() => {
  select.value = proxy?.$refs["select"] as HTMLElement;
  select.value.addEventListener("blur", () => {
    display.value = false;
  });
});

// 监听绑定值变化
watch(props, (newVal, oldVal) => {
  current.value = props.modelValue as string;
  if (props.modelValue && props.allowClear) {
    close.value = true;
    select.value?.setAttribute("class", "c-select hide");
  } else {
    close.value = false;
    select.value?.setAttribute("class", "c-select");
  }
});

// 清空值
const clear = () => {
  emits("update:model-value", "");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
