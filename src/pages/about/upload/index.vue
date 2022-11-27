<template>
  <div class="photo-upload">
    <div class="photo-upload-form">
      <div class="tip">
        The quantity shall not exceed 3 pieces and the size shall not exceed 10M
      </div>
      <Upload
        multiple
        :limit="3"
        :maxSize="1024 * 1024 * 10"
        @upload="uploadPhoto"
        :percentage="progress"
      ></Upload>
    </div>
  </div>
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
