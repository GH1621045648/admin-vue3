import { createStore } from 'vuex';

import { globalStore } from './globalStore/index.js';
import { componentStore } from './componentStore/index.js';

const store = createStore({
  modules: {
    globalStore,
    componentStore,
  },
});

export default store;
