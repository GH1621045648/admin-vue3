import { createApp } from 'vue';

import App from './App.vue';
import store from './store';
import router from './routers';
import './assets/css/reset.css';
import 'es6-promise/auto';

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');
