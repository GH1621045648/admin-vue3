import * as VueRouter from 'vue-router';
import Home from '../pages/home/index.vue';
import Mine from '../pages/mine/index.vue';
import Manage from '../pages/manage/index.vue';
import OrderManage from '../pages/manage/orderManage/index.vue';
import UserManage from '../pages/manage/userManage/index.vue';
const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      title: '首页',
    },
  },
  { path: '/', redirect: '/home' },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/manage',
        component: Manage,
        meta: {
          title: '管理中心',
          icon: 'el-icon-menu',
        },
        children: [
          {
            path: '/orderManage',
            name: 'orderManage',
            component: OrderManage,
            meta: {
              title: '订单管理',
            },
          },
          {
            path: '/userManage',
            name: 'userManage',
            component: UserManage,
            meta: {
              title: '用户管理',
            },
          },
        ],
      },
      {
        path: '/mine',
        name: 'mine',
        component: Mine,
        meta: {
          title: '我的',
          icon: 'el-icon-user',
        },
      },
    ],
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});
export default router;
