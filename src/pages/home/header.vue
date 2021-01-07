<template>
  <h1
    class="fire"
    @click="$router.push('/home')"
    :style="{'color':theme}"
  >{{userName}}</h1>
  <Theme @change="changeTheme"></Theme>
  <div class="favicon">
    <el-popover
      placement="bottom"
      :width="320"
      trigger="manual"
      v-model:visible="visibilityPopover"
    >
      <template #reference>
        <el-avatar
          icon="el-icon-user-solid"
          :style="{'color':theme}"
          @click="visibilityPopover = !visibilityPopover"
        ></el-avatar>
      </template>
      <div>
        <div class="user-info">
          <div class="user">
            <el-avatar
              class="avatar"
              icon="el-icon-user-solid"
              :style="{'color':theme}"
            ></el-avatar>
            <section class="userName">{{userName}}</section>
          </div>
          <el-button
            class="loginOut"
            type="text"
          >退出登录</el-button>
        </div>
        <div class="handle-info">
          <h1 :style="{'border-color':theme}">个人中心</h1>
          <ul>
            <li>
              <svg
                class="iconFont icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-userinfo" />
              </svg>
              <h6>个人信息</h6>
            </li>
            <li @click="drawer = true">
              <svg
                class="iconFont icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-theme" />
              </svg>
              <h6>主题换色</h6>
            </li>
          </ul>
        </div>
      </div>
    </el-popover>
    <el-drawer
      v-model="drawer"
      :with-header="false"
      size='400px'
      @opened='visibilityPopover = !visibilityPopover'
    >
      <div class="drawer-body">

      </div>
    </el-drawer>
  </div>
</template>

<script>
import Theme from '@/components/theme/index.vue';
import { mapState } from 'vuex';
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
  components: { Theme },
  setup() {
    const drawer = ref(false);
    const visibilityPopover = ref(false);
    onMounted(() => {});
    return {
      drawer,
      visibilityPopover
    };
  },
  computed: {
    ...mapState('base', ['theme', 'userName'])
    // theme() {
    //   return this.$store.state.base.theme;
    // }
  },
  methods: {
    changeTheme(value) {
      this.$store.commit('base/changeTheme', value);
    }
  }
});
</script>

<style lang='less' scoped>
@import url(../../assets/css/header.less);
</style>