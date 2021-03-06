import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/SchedulePage.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: () => import('../views/GalleryPage.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogPage.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/RegisterPage.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
