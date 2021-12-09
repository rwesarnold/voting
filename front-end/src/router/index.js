import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Overall_Results from '../views/Overall_Results.vue'
import Photos from '../views/Photos.vue'

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
    path: '/Photos',
    name: 'Photos',
    component: Photos
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
