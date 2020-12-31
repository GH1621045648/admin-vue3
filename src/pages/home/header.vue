<template>
  <div class="icon">
    <h1
      class="fire"
      :style="{'color':theme}"
    >shuquanliu</h1>
  </div>
  <Theme @change='changeTheme'></Theme>
  <div
    class="favicon"
    style=" background: linear-gradient(red, blue);"
  >
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
.fire {
  height: 88px;
  width: 200px;
  line-height: 72px;
  text-align: center;
  font-family: 'Comic Sans MS';
  font-size: 36px;
  color: white;
  text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, 0px 20px 5px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
}
.favicon {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 0;
  right: 0;
}
</style>