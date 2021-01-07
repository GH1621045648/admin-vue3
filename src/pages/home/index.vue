<template>
  <div
    id="header"
    :style="{'border-bottom':`1px solid ${theme}`}"
  >
    <Header></Header>
  </div>
  <div id="main">
    <div
      id="aside"
      :style="{'border-right':`1px solid ${theme}`}"
    >
      <SideBar></SideBar>
    </div>
    <div
      id="content"
      v-if="$route.name == 'home'"
    >
      <Welcome></Welcome>
    </div>
    <div
      id="content"
      v-else
    >
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Header from './header.vue';
import SideBar from './sideBar.vue';
import Welcome from './welcome.vue';
export default {
  components: {
    Header,
    SideBar,
    Welcome
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