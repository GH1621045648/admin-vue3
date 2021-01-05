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
      trigger="click"
    >
      <template #reference>
        <el-avatar
          icon="el-icon-user-solid"
          :style="{'color':theme}"
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
            <li>
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
</template>

<script>
import Theme from '@/components/theme/index.vue';
import { mapState } from 'vuex';
export default {
  components: { Theme },
  data() {
    return {};
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
.fire {
  cursor: pointer;
  -webkit-touch-callout: none; /*系统默认菜单被禁用*/
  -webkit-user-select: none; /*webkit浏览器*/
  -khtml-user-select: none; /*早期浏览器*/
  -moz-user-select: none; /*火狐*/
  -ms-user-select: none; /*IE10*/
  user-select: none;
}
.favicon {
  width: 88px;
  height: 88px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-icon-user-solid {
    display: block;
    font-size: 32px;
    width: 32px;
    height: 32px;
  }
}
.user-info {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .user {
    display: flex;
    .userName {
      line-height: 40px;
      text-indent: 20px;
      font-family: 'Comic Sans MS';
      font-size: 18px;
    }
  }
}
.handle-info {
  margin-top: 20px;
  h1 {
    line-height: 48px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    box-sizing: border-box;
    font-weight: 600;
  }
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 64px;
      height: 64px;
      margin-right: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      .icon {
        width: 32px;
        height: 32px;
        margin-top: 15px;
      }
    }
  }
}
</style>