/**
 * Created by qianqing on 2017/1/22.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './home';
import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {requiresAuth: false}
  },
  ...home,
  {
    path: '*',
    component(resolve) {
      require.ensure(['../views/404.vue'], () => {
        resolve(require('../views/404.vue'));
      });
    }
  }
];

// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next();
  }
});

export default router;
