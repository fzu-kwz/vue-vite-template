import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/style/global.less";

if (sessionStorage.getItem("login") === "true") {
  store.state.isLogin = true;
}

// 路由跳转前判断需要登录后才能访问的路由
router.beforeEach((to, from, next) => {
  document.getElementsByTagName("main")[0].scrollTop = 0;
  if (to.meta.requireAuth && !store.state.isLogin) {
    store.state.showLogin = true;
  }
  next();
});

const app = createApp(App);
app.use(router).use(store);
app.mount("#app");
