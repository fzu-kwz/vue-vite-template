import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import "@/assets/style/global.less";

// 路由跳转前判断需要登录后才能访问的路由
router.beforeEach((to, from, next) => {
  document.getElementsByTagName("main")[0].scrollTop = 0;
  next();
});

const app = createApp(App);
app.use(router);
app.mount("#app");
