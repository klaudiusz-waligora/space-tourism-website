import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Destination from '../views/Destination.vue'
import Crew from '../views/Crew.vue'
import Technology from '../views/Technology.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/Destination.vue',
    component: Destination
  },
  {
    path: '/Crew.vue',
    component: Crew
  },
  {
    path: '/Technology.vue',
    component: Technology
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
