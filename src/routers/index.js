import * as VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
export default router;
