<template>
  <div class="header">
    <Theme @change='changeTheme'></Theme>
  </div>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import Theme from '@/components/theme/index.vue';
export default {
  components: { Theme },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    changeTheme(value) {
      console.log('主题颜色更换为' + value);
      this.$store.commit('globalStore/changeTheme', value);
    }
  }
};
</script>

<style lang="less" scoped>
</style>