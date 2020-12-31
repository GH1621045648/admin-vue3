import state from './state';
import { mutations } from './mutations';
import { getters } from './getters';
import { actions } from './actions';

const base = {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
export default base;
