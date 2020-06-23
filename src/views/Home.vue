<template>
  <el-container class="home">
    <!-- 侧边导航栏 -->
    <el-aside width="200px">
      <navigation></navigation>
    </el-aside>
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <i class="iconfont icon-iconportrait"></i>
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
      view_show: false
    };
  },
  mounted() {
    this.view_show = true;
  },
  components: { navigation }
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  .el-header {
    width: 100%;
    line-height: 60px;
    border: 1px solid #000;
    margin: 0 auto;
    padding: 0;
  }

  .el-aside {
    height: 100%;
  }

  .el-main {
    padding: 0;
    height: 100%;
    border: 1px solid #000;
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
