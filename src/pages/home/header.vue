<template>
  <Theme @change='changeTheme'></Theme>
  <div class="favicon">
    a
  </div>
</template>

<script>
import Theme from '@/components/theme/index.vue';
import { mapState } from 'vuex';
export default {
  components: { Theme },
  computed: {
    ...mapState('base', ['theme'])
    // theme() {
    //   return this.$store.state.base.theme;
    // }
  },
  methods: {
    changeTheme(value) {
      this.$store.commit('base/changeTheme', value);
    }
  }
};
</script>

<style lang='less' scoped>
.favicon {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>