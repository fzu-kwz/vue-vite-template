import { request } from "@/utils/request";
import { LoginForm } from "@/types";

// url前缀
const prefix = "/user";

/**
 * @description 获取user
 * @returns axios实例
 */
export function getUser(data: LoginForm) {
  return request({
    url: prefix,
    method: "POST",
    data,
  });
}
