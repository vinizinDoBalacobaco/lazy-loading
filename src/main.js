// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Lazyload from './puglins/lazyload'; // Verifique se o caminho está correto

const app = createApp(App);

app.use(router);
app.use(Lazyload);

app.mount('#app');
