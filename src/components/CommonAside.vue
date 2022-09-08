<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color='#545c64'
    text-color='#fff'
    active-text-color='#ffd04b'
  >
  <h3 >{{isCollapse?'后台':'通用后台管理系统'}}</h3>
  <!-- 一级菜单 -->
    <el-menu-item  v-for="(item,index) in noChildren" :key="item.path" :index="index.toString()" @click='clickMenu'>
      <i :class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <!-- 二级彩带你第一层 -->
    <el-submenu  v-for='(item,index) in hasChildren' :index="index.toString()" :key="item.path" >
      <template slot="title">
         <i :class="'el-icon-'+item.icon"></i>
       <span slot="title">{{item.label}}</span>
      </template>
      <!-- 二级彩电第二层 -->
      <el-menu-item-group v-for="(subItem,subIndex) in item.children" :key="subItem.path"  :index="subIndex.toString()" >
        <el-menu-item :index="subIndex.toString()">{{subItem.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "CommonAside",
  data() {
    return {
      menu: [
        {
          path: "/home",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item){
      this.router.push(
        name=item.name
      )
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse(){
      return this.$store.state.tab.isCollapse
    }
  },
};
</script>

<style scoped lang='less'>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100%;
  border: none;
  h3{
    color:#fff;
    text-align:center;
    line-height: 48px;
  }
}
</style>