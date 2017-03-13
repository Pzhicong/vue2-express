# vue2-express-family

> Vue 2.0全家桶套餐，包含vue-router2.0和vuex2.0，集成express作为web server。

## 前言
该脚手架以express作为web server，集成了vue2.0、vue-router2.0和vuex2.0。
用于方便快速的创建工程，并实现生产环境的部署。

## 运行及构建
``` bash
$ npm install -g vue-cli
$ vue init joneqian/vue2-express-family my-project
$ cd my-project
$ npm install
$ npm run dev //运行开始模式
```
如果你的8080端口被占用，请修改`/config/index.js`文件。

## 项目结构

```
├── README.md
├── build  // webpack build文件
│
├── config  // webpack 配置文件
│
├── server  // express(server端)
│   ├── bin
│   ├── config // server端配置项，包含api、oss、微信等
│   ├── logs // server端运行日志
│   ├── routes // express 路由
│   ├── app.js
│   ├── favicon.ico
│   ├── logger.js // 日志模块
│   ├── package.json
│   ├── public // 打包构建后的资源文件夹
│   └── views // 打包构建后的页面文件夹
│
├── src
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── images
│   │   └── js // 前端js工具集
│   │
│   ├── components // vue组件
│   ├── directive // vue指令
│   ├── plugins // vue插件
│   ├── router // vue-router
│   ├── store // vuex store
│   ├── views // vue 页面
│   ├── main.js
│   └── App.vue
│
├── static // 静态资源(ui、html页面)
│
├── test 
│
├── index.html
└── package.json
```