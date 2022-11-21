<template>
  <div class="upload">
    <CButton v-if="button" type="danger" class="upload-btn">
      <label for="upload-file" title="upload">Click Upload</label>
    </CButton>

    <label v-else for="upload-file" class="upload-label" title="upload"
      >+</label
    >
    <div class="file-list" v-if="showList">
      <ul class="file-list-ul">
        <li v-for="item in fileList" :key="item.name">
          <span>{{ item.name }}</span>
          <button class="delete" @click="removeFile(item.name)">
            ×
          </button>
        </li>
      </ul>
      <div class="progress" v-show="fileList.length !== 0">
        <progress :value="percentage" max="100"></progress>
        <span>{{ percentage }}%</span>
      </div>
    </div>
    <input
      id="upload-file"
      v-show="false"
      type="file"
      :accept="accept"
      :multiple="multiple"
      @change="fileChange($event, limit, /^image\//, maxSize)"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

import CButton from "@/components/c-button/index.vue";

defineProps({
  accept: {
    type: String,
    default: "image/*",
  },
  showList: {
    type: Boolean,
    default: true,
  },
  button: {
    type: Boolean,
    default: undefined,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  limit: {
    type: Number,
    default: 1,
  },
  maxSize: {
    type: Number,
    default: 1024 * 1024 * 2,
  },
  percentage: {
    type: Number,
    default: 0,
  },
});

const emits = defineEmits(["upload"]);

const fileList: Array<File> = reactive([]);

/**
 * @description 文件上传方法
 * @param event 文件上传事件
 * @param limit 文件最大数量
 * @param reg 匹配文件类型
 * @param maxSize 文件大小限制
 */
const fileChange = (
  event: Event,
  limit: number,
  reg: RegExp,
  maxSize: number
) => {
  // 文件上传控件
  const fileInput = event.target as HTMLInputElement;
  // 文件列表
  const files = fileInput.files as FileList & Array<File>;
  // 文件个数
  const filesLength = files.length;

  if (filesLength > limit) {
    alert(`单次上传数量不超过${limit}个！`);
    return (fileInput.value = "");
  }
  for (let i = 0; i < filesLength; i++) {
    const pattern = new RegExp(reg);
    const item = files.item(i) as File;
    if (!pattern.test(item.type)) {
      alert(`只能上传${item.type}！`);
      return (fileInput.value = "");
    }
  }
  for (let i = 0; i < filesLength; i++) {
    const item = files.item(i) as File;
    if (item.size > maxSize) {
      alert(`文件大小不超过${maxSize / 1024 / 1024}M！`);
      return (fileInput.value = "");
    }
  }

  fileList.splice(0);
  fileList.push(...files);

  const formData = new FormData();
  for (let i = 0; i < filesLength; i++) {
    formData.append("file" + i, files.item(i) as File);
  }
  emits("upload", formData);
  fileInput.value = "";
};

const removeFile = (name: string) => {
  const list: Array<File> = reactive([]);
  list.push(...fileList);
  fileList.splice(0);
  fileList.push(
    ...list.filter((item) => {
      return item.name !== name;
    })
  );
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
