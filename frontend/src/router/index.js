import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/oauth2callback',
      name: 'oauth2callback',
      component: () => import('../views/Oauth2callback.vue')
    }
  ]
})

export default router
