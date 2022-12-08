import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const Home = () => import("@/pages/home/index.vue");
const Upload = () => import("@/pages/about/upload/index.vue");
const Wall = () => import("@/pages/about/wall/index.vue");

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    name: "home",
    component: Home,
    meta: { title: "Home" },
  },
  {
    path: "/about",
    name: "about",
    redirect: "/about/upload",
    meta: { title: "About" },
    children: [
      {
        path: "/about/upload",
        name: "about-upload",
        component: Upload,
        meta: { title: "Upload" },
      },
      {
        path: "/about/wall",
        name: "about-wall",
        component: Wall,
        meta: { title: "Wall" },
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

// HTML文档标题
router.afterEach((to, from, failure) => {
  if (to.meta && to.meta.title) {
    //@ts-ignore
    document.title = to.meta.title;
  } else {
    document.title = "Demo";
  }
});

export default router;
