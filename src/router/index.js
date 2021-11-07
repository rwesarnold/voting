import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overall_Results from '../views/Overall_Results.vue'
import Sorted_Results from '../views/Sorted_Results.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Overall_Results',
    name: 'Overall_Results',
    component: Overall_Results
  },
  {
    path: '/Sorted_Results',
    name: 'Sorted_Results',
    component: Sorted_Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
