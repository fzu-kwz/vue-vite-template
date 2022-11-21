<template>
  <div class="c-input-box" tabindex="-1" :class="focus ? 'shadow' : ''">
    <input
      :type="type"
      class="c-input"
      v-model="modelValue"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span class="suffix">
      <span class="view" v-if="props.type === 'password'" @click="showPass">
        <img
          src="@/assets/icon/show.svg"
          alt="show.svg"
          v-show="type === 'text'"
        />
        <img
          src="@/assets/icon/hide.svg"
          alt="hide.svg"
          v-show="type === 'password'"
        />
      </span>
      <span class="clear" v-if="allowClear" @click="clear">×</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "text",
    validator: (value: string) => {
      return ["text", "password"].indexOf(value) !== -1;
    },
  },
  allowClear: {
    type: Boolean,
    default: undefined,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

// 密码框类型
const type = ref(props.type);

// 是否聚焦
const focus = ref(false);

// 子组件定义自己的visible
const modelValue = computed({
  get: () => props.modelValue,
  set: (value) => emits("update:modelValue", value),
});

// 更新v-model绑定的值
const emits = defineEmits(["update:modelValue"]);
const clear = () => {
  emits("update:modelValue", "");
};

// 切换图标
const showPass = () => {
  type.value === "password" ? (type.value = "text") : (type.value = "password");
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
