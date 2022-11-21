import { request } from "@/utils/request";
import { Photo } from "@/types";
import { Ref } from "vue";

// url前缀
const prefix = "/photo";

/**
 * @description 上传图片
 * @param data 文件流
 * @returns axios实例
 */
export function upload(data: FormData, progress: Ref<number>) {
  return request({
    url: prefix + "/upload",
    method: "POST",
    data,
    // 上传进度
    onUploadProgress: (progressEvent: ProgressEvent) => {
      progress.value = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
    },
  });
}

/**
 * @description 获取photo数据
 * @returns axios实例
 */
export function getPhotoList(page?: number, size?: number) {
  return request({
    url: `${prefix}/list?page=${page}&size=${size}`,
    method: "GET",
  });
}

/**
 * @description 删除photo
 * @returns axios实例
 */
export function deletePhoto(data: Photo) {
  return request({
    url: prefix,
    method: "POST",
    data,
  });
}
