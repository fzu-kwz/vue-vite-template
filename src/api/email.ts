import { request } from "@/utils/request";
import { Advice } from "@/types";

// url前缀
const prefix = "/email";

/**
 * @description 发送advice邮件
 * @param data advice表单
 * @returns axios实例
 */
export function send(data: Advice) {
  return request({
    url: prefix + "/advice",
    method: "POST",
    data,
  });
}
