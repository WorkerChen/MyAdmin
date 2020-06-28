<template>
  <el-col class="nav">
    <!-- 导航 -->
    <el-menu
      default-active="0"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff04b"
      :unique-opened="true"
      :collapse="collapse"
      router
      class="menu"
    >
      <!-- 用户头像 -->
      <!-- <div class="admin" v-if="!collapse">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div> -->
      <div v-for="(item, index) in myRoutes" :key="index">
        <template v-if="item.menuShow">
          <el-submenu v-if="!item.leaf" :index="index + ''">
            <template slot="title">
              <i class="iconfont" :class="item.icon"></i>
              <span slot="title" v-if="!collapse">{{ item.name }}</span>
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
            <i class="iconfont" :class="item.icon"></i>
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
  props: {
    collapse: Boolean
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
  .el-submenu {
    .el-menu-item {
      span {
        margin-left: 16px;
      }
    }
  }
  .iconfont {
    vertical-align: middle !important;
    margin-right: 10px !important;
  }
}

.menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100%;
}
</style>
