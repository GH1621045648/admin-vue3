<template>
  <div class="sideBar">
    <div
      class="icon"
      :style="{'border-bottom':`1px solid ${theme}`}"
    >
      <h1
        id="fire"
        :style="{'color':theme}"
      >shuquanliu</h1>
    </div>
    <div
      class="aside"
      :style="{'border-right':`1px solid ${theme}`}"
    >
      <SideBar></SideBar>
    </div>
  </div>
  <div class="content">
    <div
      class="header"
      :style="{'border-bottom':`1px solid ${theme}`}"
    >
      <Header></Header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Header from './header.vue';
import SideBar from './sideBar.vue';
export default {
  components: {
    Header,
    SideBar
  },
  data() {
    return {};
  },
  computed: {
    theme() {
      return this.$store.state.base.theme;
    }
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
#fire {
  height: 100%;
  line-height: 72px;
  text-align: center;
  font-family: 'Comic Sans MS';
  font-size: 36px;
  color: white;
  text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, 0px 20px 5px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
}
</style>