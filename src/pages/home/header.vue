<template>
  <h1
    class="fire"
    @click="$router.push('/home')"
    :style="{'color':theme}"
  >{{userName}}</h1>
  <div class="favicon">
    <el-popover
      placement="bottom"
      :width="320"
      trigger="click"
      v-model:visible="visibilityPopover"
    >
      <!-- trigger="manual" -->
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
  </div>
  <el-drawer
    v-model="drawer"
    :destroy-on-close='true'
    :append-to-body='true'
    :show-close='false'
    size='400px'
  >
    <template #title>
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
          type="text"
          @click="drawer = false"
        >退出</el-button>
      </div>
    </template>
    <div class="drawer-body">
      <ChangeTheme v-model:drawer="drawer"></ChangeTheme>
    </div>
  </el-drawer>

</template>

<script>
import ChangeTheme from './changeTheme.vue';
import { mapState } from 'vuex';
import { defineComponent, ref, onMounted } from 'vue';
export default defineComponent({
  components: { ChangeTheme },
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
  },
  methods: {}
});
</script>

<style lang='less' scoped>
@import url(../../assets/css/header.less);
</style>