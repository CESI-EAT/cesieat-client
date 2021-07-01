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
import { Store } from 'vuex'

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
    path: '/stores/:id',
    name: 'Store',
    component: () =>
      import(/* webpackChunkName: "store" */ '../views/Store.vue'),
    props: (route) => ({ id: route.params.id }),
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
    path: '/stripe',
    name: 'Stripe',
    component: () =>
      import(/* webpackChunkName: "stripe" */ '../views/Stripe.vue'),
  },
  {
    path: '/deliveryorders',
    name: 'DeliveryOrders',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DeliveryOrders.vue'),
  },
  {
    path: '/deliveryhistory',
    name: 'DeliveryHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DeliveryHistory.vue'),
  },
  {
    path: '/storeorders',
    name: 'StoreOrders',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StoreOrders.vue'),
  },
  {
    path: '/storehistory',
    name: 'StoreHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StoreHistory.vue'),
  },
  {
    path: '/userhistory',
    name: 'UserHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserHistory.vue'),
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
      import(/* webpackChunkName: "conditions" */ '../views/Conditions.vue'),
  },
  {
    path: '/gdpr',
    name: 'Gdpr',
    component: () => import(/* webpackChunkName: "gdpr" */ '../views/Gdpr.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Vue.$cookies.isKey('jwt')) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
