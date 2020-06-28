<template>
  <el-container class="home">
    <!-- 侧边导航栏 -->
    <transition>
      <el-aside width="">
        <navigation :collapse="menu"></navigation>
      </el-aside>
    </transition>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <i
          :class="menu ? ' iconfont iconcaidan1' : 'iconfont iconcaidan'"
          @click="checkMenu()"
        ></i>
        <!-- 面包屑 -->
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <!-- <el-breadcrumb-item v-for="(item, index) in breadName" :key="index">{{
            item
          }}</el-breadcrumb-item> -->
        </el-breadcrumb>
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
  mounted() {
    /*内容加载*/
    this.view_show = true;
    /*获取用户窗口宽度*/
    window.onresize = () => {
      return (() => {
        this.sceenWidth = window.innerWidth;
      })();
    };
  },
  components: { navigation },
  watch: {
    sceenWidth: function(newVal) {
      if (newVal < 1048) {
        this.menu = true;
      } else {
        this.menu = false;
      }
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
    display: flex;
    width: 100%;
    height: 50px !important;
    line-height: 50px;
    padding: 0;
    border-bottom: 1px solid #000;
    i {
      height: 100%;
      width: 50px;
      text-align: center;
      display: block;
      font-size: 24px;
      transition: background-color 1s;
      &:hover {
        background-color: #cccccc;
        color: #fff;
      }
    }
    .el-breadcrumb {
      line-height: 50px;
      margin-left: 10px;
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
<style>
.view-enter-active {
  animation: fade 1.25s;
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
