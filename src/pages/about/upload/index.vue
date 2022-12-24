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

import { Upload, Tip } from "burger-ui";

import { upload } from "@/api/photo";

const progress = ref();

const uploadPhoto = async (files: Array<File>) => {
  const data = new FormData();
  files.forEach((item, index) => {
    data.append("file" + index, item);
  });
  /* const res = await upload(data, progress);
  if (res) {
    res.code === 200
      ? Tip({ message: "Uploaded successfully!" })
      : Tip({ message: "Upload failed!" });
  } else {
    Tip({ message: "Upload failed!" });
  } */
};
</script>

<style lang="less" scoped>
@import url(./index.less);
</style>
