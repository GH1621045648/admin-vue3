import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './routers';

import 'es6-promise/auto';

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import Drwear from '@c/drwear';

import '@/assets/js/iconfont.js';

import './assets/css/reset.css';
import '@/assets/css/common.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus, { locale });
app.use(Drwear);
app.config.globalProperties.$test = (messages = 'test') => {
  alert(messages);
};
console.log(app._context.components);
app.mount('#app');
