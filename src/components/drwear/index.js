import { defineComponent } from 'vue';
import _Drwear from './index.vue';
const Drwear = defineComponent(_Drwear);
Drwear.install = function(Vue, options) {
  Vue.component(Drwear.name, Drwear);
};
export default Drwear;
