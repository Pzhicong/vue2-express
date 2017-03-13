{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store';
import routes from './router'; // 引入路由配置
import VueLazyload from 'vue-lazyload'; // 引入图片懒加载模块
import inputPrice from './directive/input-price';
import inputQuantity from './directive/input-quantity';
import './assets/css/my.css';

Vue.use(inputPrice);
Vue.use(inputQuantity);

// 注册组件
Vue.use(VueRouter);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require('./assets/images/404.gif'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

const router = new VueRouter({
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (store.state.token) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})；

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  });