import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: () => import('../views/TikTravel.vue')
    },
    {
      path: '/user/:username/',
      name: 'user',
      component: () => import('../views/Usuario.vue')
    },
    {
      path: '/viajes',
      name: 'viajes',
      component: () => import('../views/Viajes.vue')
    },
    {
      path: '/descubre',
      name: 'descubre',
      component: () => import('../views/Descubre.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/reservas',
      name: 'reservas',
      component: () => import('../views/Reservas.vue')
    }
  ]
})

export default router
