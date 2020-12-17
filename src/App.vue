<template>
  <div>
    <div class="header">
      <router-link to="/home">home</router-link><br />
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  components: {},
  created() {},
  mounted() {}
};
</script>

<style >
@media screen and (max-width: 1360px) {
  .header {
    width: 100%;
    height: 48px;
    background: yellowgreen;
  }
  .container {
    width: 100%;
    height: 100%;
    background: #fff;
  }
}
@media screen and (min-width: 1360px) and (max-width: 1680px) {
  .header {
    min-width: 1360px;
    height: 48px;
    background: yellow;
  }
  .container {
    min-width: 1360px;
    height: 100%;
    background: red;
  }
}
@media screen and (min-width: 1680px) {
  .header {
    min-width: 1360px;
    height: 48px;
    background: red;
  }
  .container {
    min-width: 1360px;
    height: 100%;
    background: red;
  }
}
</style>