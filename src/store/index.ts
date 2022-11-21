import { createStore } from "vuex";
import { Route } from "@/types";

const store = createStore({
  state: {
    currentPath: "", // 当前路由
    routeArray: [] as Array<Route>, // 导航路由数组
    showLogin: false, // 显示用户头像
    isLogin: false, // 是否登录
  },
  getters: {
    getFirstPath: (state) => {
      return state.currentPath.split("/")[1];
    },
    getSecondPath: (state) => {
      return state.currentPath.split("/")[2];
    },
    getThirdPath: (state) => {
      return state.currentPath.split("/")[3];
    },
  },
  mutations: {
    updatecurrentPath(state, path: string) {
      state.currentPath = path;
    },
    routeArrayPush(state, route: Route) {
      let exist = false;
      state.routeArray.forEach((item: Route) => {
        if (route.path === item.path) {
          exist = true;
        }
      });
      !exist ? state.routeArray.push(route) : "";
    },
    routeArrayDelete(state, path: string) {
      state.routeArray.forEach((item: Route, index: number) => {
        item.path === path ? state.routeArray.splice(index, 1) : "";
      });
    },
    routeArrayClear(state) {
      state.routeArray.splice(0, state.routeArray.length);
    },
  },
});

export default store;
