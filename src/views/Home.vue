<template>
  <el-container class="home">
    <!-- 侧边导航栏 -->
    <el-aside width="">
      <navigation :collapse="menu"></navigation>
    </el-aside>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <el-col :span="1.5">
          <i
            :class="menu ? ' iconfont iconcaidan1' : 'iconfont iconcaidan'"
            @click="checkMenu()"
          ></i
        ></el-col>
        <!-- 面包屑 -->
        <el-col :span="10">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item, key) in breadName" :key="key">{{
              item
            }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
      </el-header>

      <!-- 内容栏 -->
      <el-main>
        <transition name="view">
          <router-view v-show="view_show" />
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation/nav.vue";
export default {
  name: "Home",
  data() {
    return {
      view_show: false,
      menu: false,
      sceenWidth: window.innerWidth,
      breadName: []
    };
  },
  created() {
    // 获取页面的加载地址和名字
    this.breadName = [];
    let pathList = this.$route.matched;
    pathList.forEach(item => {
      if (item.name) {
        this.breadName.push(item.name);
      }
    });
  },
  mounted() {
    /*获取用户窗口宽度*/
    this.view_show = true;
    window.onresize = () => {
      return (() => {
        this.sceenWidth = window.innerWidth;
      })();
    };
  },
  components: { navigation },
  watch: {
    // 监听窗口宽度变化
    sceenWidth: function(newVal) {
      if (newVal < 1048) {
        this.menu = true;
      } else {
        this.menu = false;
      }
    },
    // 监听路由变化
    $route(to) {
      this.breadName = [];
      let pathList = to.matched;
      pathList.forEach(item => {
        if (item.name) {
          this.breadName.push(item.name);
        }
      });
    }
  },
  methods: {
    /*导航开关按钮*/
    checkMenu() {
      this.menu = !this.menu;
    }
  }
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  .el-header {
    width: 100%;
    height: 50px !important;
    line-height: 50px;
    padding: 0;
    border-bottom: 1px solid #000;
    position: relative;
    i {
      position: relative;
      height: 100%;
      width: 50px;
      text-align: center;
      display: block;
      font-size: 24px;
      &:hover {
        background-color: #cccccc;
        color: #fff;
      }
    }
    .el-breadcrumb {
      position: absolute;
      bottom: 10px;
      margin-left: 8px;
    }
  }

  .el-aside {
    height: 100%;
  }

  .el-main {
    height: 100%;
    overflow: hidden;
  }
}
</style>
