<template>
  <el-menu :uniqueOpened="true" @select="handleSelect" :active-text-color="theme" class="menu">
    <template v-for="(item,index) in asideList" :key="index">
      <el-submenu v-if="item.children && item.children.length > 0" :index="item.path">
        <template #title>
          <i :class="item.meta.icon"></i>
          <span>{{item.meta.title}}</span>
        </template>
        <el-menu-item-group>
          <template v-for="(elements,childIndex) in item.children" :key="childIndex">
            <el-submenu
              v-if="elements.children && elements.children.length > 0"
              :index="elements.path"
            >
              <template #title>
                <i :class="elements.meta.icon"></i>
                <span>{{elements.meta.title}}</span>
              </template>
              <el-menu-item-group>
                <template v-for="(ele,ind) in elements.children" :key="ind">
                  <el-menu-item>{{ele.meta.title}}</el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="elements.path">{{elements.meta.title}}</el-menu-item>
          </template>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item v-else :index="item.path">
        <i :class="item.meta.icon"></i>
        <template #title>{{item.meta.title}}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$store.state.base.theme;
    },
    asideList() {
      let arr = [];
      this.$router.options.routes.map(item => {
        if (item.children && item.children.length > 0) {
          arr = arr.concat(item.children);
        }
      });
      return arr;
    }
  },
  methods: {
    handleSelect(path, indexPath) {
      console.log(path, indexPath);
      this.$router.push(path);
    }
  }
};
</script>

<style lang="less" scoped>
.menu {
  border: none !important;
  user-select: none;
}
.el-submenu .el-menu-item {
  min-width: 199px;
  user-select: none;
}
</style>