<template>
  <el-col class="nav">
    <el-menu
      default-active="0"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff04b"
      :unique-opened="true"
      router
    >
      <div class="admin">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div v-for="(item, index) in myRoutes" :key="index">
        <template v-if="item.menuShow">
          <el-submenu v-if="!item.leaf" :index="index + ''">
            <template slot="title">
              <!-- <i :class="item.iconCls"></i> -->
              <span slot="title">{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(value, key) in item.children"
              :key="key"
              :index="value.path"
            >
              <span>{{ value.name }}</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else-if="item.leaf && item.children && item.children.length == 1"
            :index="item.children[0].path"
          >
            <span slot="title">{{ item.children[0].name }}</span>
          </el-menu-item>
        </template>
      </div>
    </el-menu>
  </el-col>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      myRoutes: this.$router.options.routes
    };
  },
  mounted() {
    console.log(this.myRoutes);
  }
};
</script>
<style lang="scss">
.nav {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
.el-menu {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .admin {
    height: 100px;
    width: 100%;
    text-align: center;
    display: flex;
    .el-avatar {
      width: 60px;
      height: 60px;
      margin: auto;
    }
  }
}
</style>
