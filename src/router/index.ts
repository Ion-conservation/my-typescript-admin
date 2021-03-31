import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Login from '@/views/login/index.vue'
import Portal from '@/views/portal/index.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Portal',
    component: Portal,
    children: [

    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/slot',
    name: 'slot',
    component: () => import('@/views/slot/index.vue')

  },
  {
    path: '/render',
    name: 'render',
    component: () => import('@/views/render/index.vue')
  },
  {
    path: '/updateProps',
    name: 'updateProps',
    component: () => import('@/views/updateProps/index.vue')
  },
  {
    path: '/jsx',
    name: 'jsx',
    component: () => import('@/views/jsx/index.vue')
  },
  {
    path: '/directive',
    name: 'directive',
    component: () => import('@/views/directive/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
