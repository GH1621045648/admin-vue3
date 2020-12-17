import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './routers';

import './assets/css/reset.css';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn';
import '@/assets/css/common.css';
import 'es6-promise/auto';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(ElementPlus, { locale });
app.mount('#app');
