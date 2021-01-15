<template>
  <div
    ref="welcome"
    style="width:100%;height:100%;"
  >
    <span class="title">
      欢迎来到
      <i :style="{'color':theme}">{{$route.meta.title}}</i>
    </span>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref } from 'vue';
import { useStore } from 'vuex';
import CanvasNest from 'canvas-nest.js';

export default defineComponent({
  setup() {
    const welcome = ref(null);
    const store = useStore();
    const theme = computed(() => store.state.base.theme);
    const config = reactive({
      count: 99,
      zIndex: '3',
      opacity: '1'
    });
    onMounted(() => {
      new CanvasNest(welcome.value, config);
    });
    return {
      welcome,
      theme
    };
  }
});
</script>

