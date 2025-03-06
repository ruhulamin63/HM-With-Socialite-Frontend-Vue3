import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index";
import { createPinia } from 'pinia';
import api from '@/utils/axios';

const app = createApp(App);
const pinia = createPinia();

app.config.globalProperties.$api = api;

app.use(pinia);
app.use(router);
app.mount('#app');