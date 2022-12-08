import { request } from "@/utils/request";

import { Ref } from "vue";

// url前缀
const prefix = "/photo";

/**
 * @description 上传图片
 * @param data 文件流
 * @param progress 进度值
 * @returns axios实例
 */
export function upload(data: FormData, progress: Ref<number>) {
  return request({
    url: prefix + "/upload",
    method: "POST",
    data,
    // 上传进度
    onUploadProgress: (progressEvent: ProgressEvent) => {
      console.log(progressEvent);
      
      progress.value = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
    },
  });
}
