/**
 * Created by qianqing on 2017/1/22.
 */
import login from './login';

const routers = [
  {
    path: '/',
    name: 'index',
    component(resolve) {
      require.ensure(['../App.vue'], () => {
        resolve(require('../App.vue'));
      });
    },
    children: [
      ...login,
      {
        path: '*',
        component(resolve) {
          require.ensure(['../views/404.vue'], () => {
            resolve(require('../views/404.vue'));
          });
        }
      }
    ]
  }
];

export default routers;
