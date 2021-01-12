<template>
  <div class="drawer-body">
    <Theme @change="changeTheme"></Theme>
  </div>
</template>

<script>
import Theme from '@/components/theme/index.vue';
import { mapState } from 'vuex';
import { defineComponent } from 'vue';
export default defineComponent({
  components: { Theme },
  setup() {},
  computed: {
    ...mapState('base', ['theme', 'userName'])
  },
  methods: {
    changeTheme(value) {
      this.$store.commit('base/changeTheme', value);
    }
  }
});
</script>

<style>
</style>