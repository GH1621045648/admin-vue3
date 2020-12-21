<template>
  <div
    class="header"
    :style="{'box-shadow':`${theme} 0px 0px 20px 0px`}"
  >
    <Theme @change='changeTheme'></Theme>
  </div>
  <div class="content">
    <div
      class="aside"
      :style="{'box-shadow':`${theme} 0px 0px 20px 0px`,'padding-top':'20px'}"
    >
      <el-menu
        :uniqueOpened="true"
        @select='handleSelect'
        :active-text-color="theme"
      >
        <template
          v-for="(item,index) in asideList"
          :key="index"
        >

          <el-submenu
            v-if="item.children && item.children.length > 0"
            :index="item.path"
          >
            <template #title>
              <i :class="item.meta.icon"></i>
              <span>{{item.meta.title}}</span>
            </template>
            <el-menu-item-group>
              <template
                v-for="(elements,childIndex) in item.children"
                :key="childIndex"
              >
                <el-submenu
                  v-if="elements.children && elements.children.length > 0"
                  :index="elements.path"
                >
                  <template #title>
                    <i :class="elements.meta.icon"></i>
                    <span>{{elements.meta.title}}</span>
                  </template>
                  <el-menu-item-group>
                    <template
                      v-for="(ele,ind) in elements.children"
                      :key="ind"
                    >
                      <el-menu-item>{{ele.meta.title}}</el-menu-item>
                    </template>

                  </el-menu-item-group>
                </el-submenu>
                <el-menu-item
                  v-else
                  :index="elements.path"
                >{{elements.meta.title}}</el-menu-item>
              </template>

            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            v-else
            :index="item.path"
          >
            <i :class="item.meta.icon"></i>
            <template #title>{{item.meta.title}}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
import Theme from '@/components/theme/index.vue';
export default {
  components: { Theme },
  data() {
    return {
      routerMaster: false
    };
  },
  computed: {
    theme() {
      return this.$store.state.globalStore.theme;
    },
    asideList() {
      let arr = [];
      this.$router.options.routes.map((item) => {
        if (item.children && item.children.length > 0) {
          arr = arr.concat(item.children);
        }
      });
      return arr;
    }
  },
  mounted() {},
  methods: {
    changeTheme(value) {
      this.$store.commit('globalStore/changeTheme', value);
    },
    handleSelect(path, indexPath) {
      console.log(path, indexPath);
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
</style>