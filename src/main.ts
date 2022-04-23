import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import directives from '@/directives';
const app = createApp(App);
Object.keys(directives).forEach((name) => app.directive(name, directives[name]));
app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.mount('#app');
