import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Text1 from "@/views/Nav1/text1";
import Text2 from "@/views/Nav1/text2";
import Text3 from "@/views/Nav1/text3";
import Text4 from "@/views/Nav2/text4";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      leaf: false,
      path: "/",
      name: "Home",
      component: Home
    },
    {
      leaf: false,
      path: "/Nav1",
      name: "Nav1",
      component: Home,
      redirect: "/Nav1/text1",
      menuShow: true,
      // icon:"iconfont menu-good" 图标
      children: [
        {
          path: "/Nav1/text1",
          component: Text1,
          name: "Text1",
          menuShow: true
        },
        {
          path: "/Nav1/text2",
          component: Text2,
          name: "Text2",
          menuShow: true
        },
        {
          path: "/Nav1/text3",
          component: Text3,
          name: "Text3",
          menuShow: true
        }
      ]
    },
    {
      leaf: true,
      path: "/Text4",
      component: Home,
      redirect: "/Text4",
      menuShow: true,
      children: [
        { path: "/text4", component: Text4, name: "Text4", menuShow: true }
      ]
    }
  ]
});
// 解决重复跳转路由报错的问题 Vue3.0
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export default router;
