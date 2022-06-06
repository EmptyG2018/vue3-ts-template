/* eslint-disable import/no-unresolved */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'virtual:svg-icons-register';

const app = createApp(App);
app.use(router).use(store).mount('#app');
