<template>
  <div
    class="drwear"
    v-show="modelValue"
    @click="hide"
  ></div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Drwear',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  mounted() {},
  methods: {
    hide() {
      this.$emit('update:modelValue', false);
    }
  }
});
</script>

<style>
.drwear {
  width: 100px;
  height: 30px;
  background: red;
}
</style>