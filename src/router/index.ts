import { createRouter, createWebHistory } from 'vue-router';
import { constRoutes } from './map';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constRoutes,
});

export default router;
