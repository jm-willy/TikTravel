import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/alojamientos',
      name: 'alojamientos',
      component: () => import('../views/Alojamientos.vue')
    },
    {
      path: '/vuelos',
      name: 'vuelos',
      component: () => import('../views/Vuelos.vue')
    },
    {
      path: '/publicaciones',
      name: 'publicaciones',
      component: () => import('../views/publicaciones.vue')
    },
    // {
    //   path: '/reservas',
    //   name: 'reservas',
    //   component: () => import('../views/Reservas.vue')
    // }
  ]
})

export default router
