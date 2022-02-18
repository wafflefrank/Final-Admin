import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementPlus from 'element-plus'; // 引用 element-ui 樣式
import 'element-plus/dist/index.css';
import locale from 'element-plus/lib/locale/lang/zh-tw';
import * as echarts from 'echarts';
import './mock/index';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.component('Loading', Loading);
app.use(VueSweetalert2);
app.use(router);
app.use(VueAxios, axios);
app.use(ElementPlus, { locale });
app.mount('#app');
