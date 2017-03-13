{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import store from './store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import routes from './router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // 引入路由配置
import VueLazyload from 'vue-lazyload'{{#if_eq lintConfig "airbnb"}};{{/if_eq}} // 引入图片懒加载模块
import inputPrice from './directive/input-price'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import inputQuantity from './directive/input-quantity'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import './assets/css/my.css'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(inputPrice);
Vue.use(inputQuantity);

// 注册组件
Vue.use(VueRouter);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require('./assets/images/404.gif'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}


const router = new VueRouter({
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
const routerApp = new Vue({
  store,
  router{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}).$mount('#app'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default routerApp{{#if_eq lintConfig "airbnb"}};{{/if_eq}}