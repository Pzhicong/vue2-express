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

## 生产环境部署和运行
将代码clone到服务器，运行:
``` bash
$ npm install
$ cd server
$ npm install
$ cd ..
$ npm run build
```
脚本将在server目录自动创建`public`和`views`目录。
通过`node server/bin/www`启动项目(生产环境建议使用pm2)。

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

## 发送 ajax 请求

由于我非常非常懒，并且觉得`axios`名字比较奇怪，因此利用`VUX`直接把`axios`封装成插件，你可以直接引用插件。

你可以查看`src/main.js`
``` js
import AjaxPlugin from './plugins/ajax';
Vue.use(AjaxPlugin);
```

然后你就可以愉快的偷懒了，使用`this.$http`进行调用了。
``` js
export default {
  name: 'hello',
  mounted () {
    this.$http(url, {})
        .then(data => {})
        .catch(error => {});
  }
};
```
由于我自己项目的需要，所以在`src/plugins/ajax/http.js`中对axios做了封装，你可以根据自己情况和喜好进行修改。

## 在dev中和express通讯
请在`config/index.js`的proxyTable中设置代理，比如
```js
proxyTable: {
  '/customer': 'http://localhost:10091'
}
```