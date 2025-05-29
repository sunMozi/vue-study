import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routeModules: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../pages/Home'), // Home.tsx
  },
  {
    path: '/about',
    component: () => import('../pages/About'),
  },
  {
    path: '/work01',
    component: () => import('../pages/Work01'),
  },
  {
    path: '/work02',
    component: () => import('../pages/Work02'),
  },
  {
    path: '/work03',
    component: () => import('../pages/Work03'),
  },
  {
    path: '/test01',
    component: () => import('../pages/Test01'),
  },
  {
    path: '/login',
    component: () => import('../pages/Login'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeModules,
})

export default router
