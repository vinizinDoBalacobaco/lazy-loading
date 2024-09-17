// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue'; // Verifique se o caminho está correto

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  // Adicione outras rotas aqui
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
