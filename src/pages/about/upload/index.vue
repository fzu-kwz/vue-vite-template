<template>
  <Upload
    :multiple="true"
    :max-size="1024 * 1024 * 2"
    :limit="3"
    accept="image/*"
    :progress="progress"
    @upload="uploadPhoto"
  >
    <img
      class="add-icon"
      src="@/assets/icon/add.svg"
      alt="add"
      width="30"
      height="30"
    />
    <template #tip>
      <div class="tip">
        Only accept pictures, file size no more than 2MB and the number of files
        no more than 3
      </div>
    </template>
  </Upload>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Upload } from "k-vue3-comp";

import { upload } from "@/api/photo";
import { createTip } from "@/utils/tip";

const progress = ref();

const uploadPhoto = async (data: FormData) => {
  const res = await upload(data, progress);
  if (res) {
    res.code === 200
      ? createTip("Uploaded successfully!")
      : createTip("Upload failed!");
  } else {
    createTip("Upload failed!");
  }
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
