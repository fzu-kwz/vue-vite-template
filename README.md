# Description

A simple Vue + Ts + Vite template

# How to start

## Install dependencies

npm install

## Run locally

npm run dev

## Build

npm run build

> after executing this script, a folder will be generated under the main folder, you can You can place the folder in the [Nginx](http://nginx.org/en/download.html) server to deploy the site.

# Menu

    ├─public                   icon图标
    └─src                      源文件
        ├─api                  接口
        ├─assets               静态文件
        │  ├─icon              图标
        │  └─style             样式
        ├─components           组件
        ├─layout               总体布局
        ├─pages                页面
        │  ├─about             about页面
        │  │  ├─upload         upload页面
        │  │  └─wall           wall页面
        │  └─home              home页面
        ├─router               路由
        └─utils                工具
        │  App.vue             主页面
        │  main.ts             主入口
        │  shims-tsx.d.ts      适配插件
        │  shims-vue.d.ts      适配.vue
    |  .browserslistrc         在不同的前端工具之间共用目标浏览器和 node 版本的配置
    |  .gitignore              git忽略文件（夹）
    |  index.html              html
    |  LICENSE                 证书
    |  README.md               说明
    |  package-lock.json       所有依赖
    |  package.json            依赖项及版本
    |  tsconfig.json           ts配置
    |  vite.config.ts          vite配置
