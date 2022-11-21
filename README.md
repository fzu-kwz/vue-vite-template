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
        │  ├─img               图片
        │  └─style             样式
        ├─components           组件
        │  ├─back-top          返回顶部
        │  ├─c-button          按钮
        │  ├─c-form            表单
        │  │  └─form-item      表单项
        │  ├─c-input           输入框
        │  ├─c-select          下拉框
        │  ├─c-table           表格
        │  ├─dialog            遮罩层
        │  ├─email-box         邮箱弹窗
        │  ├─empty             空状态
        │  ├─loadImg           懒加载图片
        │  ├─loading           加载提示
        │  ├─login-box         登录弹窗
        │  ├─navigation-record 导航栏
        │  ├─pagination        分页
        │  ├─skeleton          骨架屏
        │  └─upload            上传
        ├─hooks                公用钩子函数
        ├─layout               总体布局
        │  ├─aside             侧边栏
        │  ├─container         布局容器
        │  ├─footer            底部
        │  ├─header            头部
        │  └─main              主体
        ├─pages                页面
        │  ├─about             about页面
        │  │  ├─upload         上传图片页面
        │  │  └─wall           图片集页面
        │  └─home              home页面
        ├─router               路由
        ├─store                状态树
        ├─types                数据类型
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
