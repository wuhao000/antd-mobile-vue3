import demo from './demo';
import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import site from './site';

export const routes = [
  site,
  {
    path: '/',
    redirect: '/install'
  },
  {
    path: '/demo/mobile',
    name: '演示',
    props: true,
    component: () => import('@/components/demo.vue'),
    children: demo
  }
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

// export default new Router({
//   base: process.env.BASE_URL,
//   routes,
//   mode: 'history'
// });
