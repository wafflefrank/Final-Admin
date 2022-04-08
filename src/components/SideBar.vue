<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    style="width: 200px"
  >
    <el-menu-item index="1" @click="homePage()">
      <template #title>
        <el-icon><location /></el-icon>
        <span>首頁</span>
      </template>
    </el-menu-item>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><icon-menu /></el-icon>
        <span>AE總站</span>
      </template>
      <el-menu-item-group title="AE總站">
        <el-sub-menu index="1-1">
          <template #title>會員管理</template>
          <el-menu-item index="1-1-1" @click="memberDetail()">會員列表</el-menu-item>
          <el-menu-item index="1-1-2" @click="newPlayerDetail()">新註冊玩家</el-menu-item>
          <el-menu-item index="1-1-3">在線會員</el-menu-item>
          <el-menu-item index="1-1-4" @click="failDetail()">登入失敗名單</el-menu-item>
          <el-menu-item index="1-1-5">註冊失敗列表</el-menu-item>
          <el-menu-item index="1-1-6" @click="groupDetail()">組別層級設置</el-menu-item>
          <el-menu-item index="1-1-7" @click="tagsDetail()">標籤管理</el-menu-item>
        </el-sub-menu>

        <el-menu-item index="1-2">財務管理</el-menu-item>

        <el-menu-item index="1-3">返水管理</el-menu-item>
        <el-sub-menu index="1-4">
          <template #title>item four</template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <span @click="chatRoom()">即時聊天室</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { defineComponent } from 'vue';
import {
  Location, Document, Menu as IconMenu, Setting,
} from '@element-plus/icons';

export default defineComponent({
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      handleOpen,
      handleClose,
    };
  },
  computed: {
    // 获取菜单对象中不包含子级的菜单
    noChildren() {
      return this.asideMenu.filter((item) => !item.children);
    },
    // 获取菜单对象中包含子级的菜单
    hasChildren() {
      return this.asideMenu.filter((item) => item.children);
    },
  },
  data() {
    return {
      // 配置菜单路由
      // asideMenu: [
      //     {
      //         path: '/',
      //         name: 'home',
      //         label: '首页',
      //         icon: 's-home',
      //     },
      //     {
      //         path: '/testlogin',
      //         name: 'testlogin',
      //         label: '登入',
      //         icon: 'video-play',
      //     },
      //     {
      //         path: '/user',
      //         name: 'user',
      //         label: '用户管理',
      //         icon: 'user',
      //     },
      //     // 设置子级菜单路由
      //     {
      //         label: '首頁',
      //         icon: 'user',
      //         children: [
      //             {
      //                 path: '/page1',
      //                 name: 'page1',
      //                 label: '页面1',
      //                 icon: 'setting',
      //             },
      //             {
      //                 path: '/page2',
      //                 name: 'page2',
      //                 label: '页面2',
      //                 icon: 'setting',
      //             },
      //         ],
      //     },
      // ],
    };
  },
  methods: {
    clickMenu(item) {
      this.$store.commit('selectMenu', item);
    },
    homePage() {
      this.$router.push('/');
    },
    newPlayerDetail() {
      this.$router.push('/newplayer');
    },
    failDetail() {
      this.$router.push('/faillist');
    },
    groupDetail() {
      this.$router.push('/grouplist');
    },
    memberDetail() {
      this.$router.push('/memberlist');
    },
    moneyDetail() {
      this.$router.push('/main/money');
    },
    tagsDetail() {
      this.$router.push('/tags');
    },
    chatRoom() {
      this.$router.push('/chatroom');
    },
  },
});
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  background: rgba(12, 11, 8, 0.829);
}
</style>
