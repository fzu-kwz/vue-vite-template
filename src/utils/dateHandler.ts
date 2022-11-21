import moment from "moment";

/**
 * @description 日期格式化
 * @param date 日期
 * @returns 格式化日期
 */
export function handleDate(date: string) {
  let handleStr = "";
  moment(Date.now()).diff(moment(date)) / 1000 <= 60
    ? (handleStr = "刚刚")
    : moment(Date.now()).diff(moment(date)) / 1000 <= 60 * 60
    ? (handleStr =
        Math.round(moment(Date.now()).diff(moment(date)) / 1000 / 60) +
        "分钟前")
    : moment(Date.now()).diff(moment(date)) / 1000 <= 60 * 60 * 24
    ? (handleStr =
        Math.round(moment(Date.now()).diff(moment(date)) / 1000 / 60 / 60) +
        "小时前")
    : moment(date).isSame(Date.now(), "day")
    ? (handleStr = moment(date).format("HH:mm"))
    : (handleStr = moment(date).format("YYYY-MM-DD HH:mm"));
  return handleStr;
}
