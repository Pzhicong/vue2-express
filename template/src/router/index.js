/**
 * Created by qianqing on 2017/1/22.
 */
import home from './home';

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
      ...home,
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
