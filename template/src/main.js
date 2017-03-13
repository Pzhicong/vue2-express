{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueLazyload from 'vue-lazyload'; // 引入图片懒加载模块
import inputPrice from './directive/input-price';
import inputQuantity from './directive/input-quantity';
import './assets/css/my.css';

Vue.use(inputPrice);
Vue.use(inputQuantity);

// error，loading是图片路径, 用require引入
Vue.use(VueLazyload, {
  error: require('./assets/images/404.gif'),
  loading: require('./assets/images/loading.gif'),
  attempt: 1{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

const router = new VueRouter({
  routes{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
});

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