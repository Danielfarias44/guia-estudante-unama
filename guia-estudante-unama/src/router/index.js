import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: () => import('../views/PagPrincipal.vue'),
  },
  {
    path: '/livros',
    name: 'Livros',
    component: () => import('../views/Biblioteca.vue'),
  },
  {
    path: '/laboratorios',
    name: 'Laboratorios',
    component: () => import('../views/Laboratorios.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;