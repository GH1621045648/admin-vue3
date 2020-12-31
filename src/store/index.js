import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import base from './base/index.js';
import user from './componentStore/user.js';

const store = createStore({
  modules: {
    base,
    user,
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'admin-vuex',
    }),
  ],
});

export default store;
