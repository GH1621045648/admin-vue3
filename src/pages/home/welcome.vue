<template>
  <div
    ref="welcome"
    style="width:100%;height:100%;"
  >
    <span class="title">欢迎来到<i :style="{'color':theme}">{{$route.meta.title}}</i></span>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref, watch } from 'vue';
import { useStore } from 'vuex';
import CanvasNest from 'canvas-nest.js';
import { colorToRGB } from '@a/js/utils';

export default defineComponent({
  setup() {
    const welcome = ref(null);
    const store = useStore();
    const theme = computed(() => store.state.base.theme);
    let cn;
    const config = reactive({
      color: colorToRGB(theme.value),
      count: 99,
      zIndex: '3',
      opacity: '1'
    });
    watch(theme, (newValue) => {
      console.log(newValue);
      config.color = colorToRGB(theme.value);
      cn.destroy();
      cn = new CanvasNest(welcome.value, config);
    });
    onMounted(() => {
      cn = new CanvasNest(welcome.value, config);
    });
    return {
      welcome,
      theme
    };
  }
});
</script>

