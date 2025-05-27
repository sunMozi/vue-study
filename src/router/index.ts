import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/Home'), // Home.tsx
  },
  {
    path: '/about',
    component: () => import('../pages/About'), // About.tsx
  },
  {
    path: '/work01',
    component: () => import('../pages/Work01'), // About.tsx
  },
  {
    path: '/work02',
    component: () => import('../pages/Work02'), // About.tsx
  },
  {
    path: '/test01',
    component: () => import('../pages/Test01'), // About.tsx
  },
  {
    path: '/login',
    component: () => import('../pages/Login'), // About.tsx
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
