import { createRouter, createWebHashHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'AE總站',
    component: () => import('@/views/AppMain.vue'),
    redirect: { name: '首頁' },
    children: [
      {
        path: 'home',
        name: '首頁',
        component: () => import('@/views/Home.vue'),
        meta: { title: '首頁' },
      },
      {
        path: 'newplayer',
        name: '新註冊玩家',
        component: () => import(/* webpackChunkName: "about" */ '../views/NewPlayer.vue'),
        meta: {
          title: '關於測試',
          module: '個人資訊',
        },
      },
      {
        path: 'memberlist',
        name: '會員列表',
        component: () => import(/* webpackChunkName: "about" */ '../views/Member.vue'),
        meta: {
          title: '在線會員',
          module: '個人資訊',
        },
      },
      {
        path: 'faillist',
        name: '登入失敗名單',
        component: () => import(/* webpackChunkName: "about" */ '../views/FailList.vue'),
        meta: {
          title: '登入失敗名單',
          module: '個人資訊',
        },
      },
      {
        path: 'grouplist',
        name: '組別層級設置',
        component: () => import(/* webpackChunkName: "about" */ '../views/GroupList.vue'),
        meta: {
          title: '組別層級設置',
          module: '個人資訊',
        },
      },
      {
        path: 'tags',
        name: '標籤管理',
        component: () => import(/* webpackChunkName: "about" */ '../views/Tags.vue'),
        meta: {
          title: '標籤管理',
          module: '個人資訊',
        },
      },
      // 總交易紀錄
      {
        path: 'transationrecord',
        name: '總交易紀錄',
        component: () => import(/* webpackChunkName: "about" */ '../views/Financial Manage/TransactionRecord.vue'),
        meta: {
          title: '關於測試',
          module: '個人資訊',
        },
      },
      // 提款紀錄
      {
        path: 'withdraw',
        name: '提款紀錄',
        component: () => import(/* webpackChunkName: "about" */ '../views/Financial Manage/WithDraw_History.vue'),
        meta: {
          title: '提款記錄頁面',
          module: '提款記錄頁面',
        },
      },
      // 銀行列表
      {
        path: 'banklist',
        name: '銀行列表',
        component: () => import(/* webpackChunkName: "about" */ '../views/Financial Manage/BankList.vue'),
        meta: {
          title: '銀行列表',
          module: '銀行列表',
        },
      },
      // 公司出入款帳戶
      {
        path: 'companyaccount',
        name: '公司出入款帳戶',
        component: () => import(/* webpackChunkName: "about" */ '../views/Financial Manage/CompanyAccount.vue'),
        meta: {
          title: '公司出入款帳戶',
          module: '公司出入款帳戶',
        },
      },
      // 第三方支付平台
      {
        path: 'thirdpay',
        name: '第三方支付平台',
        component: () => import(/* webpackChunkName: "about" */ '../views/Financial Manage/ThirdPay.vue'),
        meta: {
          title: '第三方支付平台',
          module: '第三方支付平台',
        },
      },
    ],
  },
  {
    path: '/memberlist',
    name: '會員管理',
    component: () => import('../views/Member.vue'),
    // children: [
    //   {
    //     path: 'home',
    //     name: '首頁',
    //     component: () => import('@/views/Home.vue'),
    //     meta: { title: '首頁' },
    //   },
    //   {
    //     path: 'account',
    //     name: '會員列表',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //     meta: {
    //       title: '關於測試',
    //       module: '個人資訊',
    //     },
    //   },
    // ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/shortcuts',
    name: 'Shortcuts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Shortcuts.vue'),
  },
  {
    path: '/livechart',
    name: 'livechart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/LiveChart.vue'),
  },
  {
    path: '/products',
    name: 'products',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/OpenModal/Products.vue'),
  },
  {
    path: '/memberdetailmodal',
    name: 'memberdetailmodal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/OpenModal/MemberDetial.vue'),
  },
  {
    path: '/grouplist_add',
    name: '組列表-新增組',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/OpenModal/GroupList_Add.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
