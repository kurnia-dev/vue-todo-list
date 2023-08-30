import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import TodoDetail from '@/views/TodoDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'TodoDetail',
    component: TodoDetail, 
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
