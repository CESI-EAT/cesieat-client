import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Stores from '@/views/Stores'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Follow from '@/views/Follow'
import Payment from '@/views/Payment'
import Profile from '@/views/Profile'
import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stores',
    name: 'Stores',
    component: Stores,
    props: (route) => ({ searchProp: route.params.searchProp }),
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/follow',
    name: 'Follow',
    component: Follow,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/conditions',
    name: 'Conditions',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Conditions.vue'),
  },
  {
    path: '/gdpr',
    name: 'Gdpr',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Gdpr.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
