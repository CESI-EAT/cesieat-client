import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Stores from '@/views/Stores'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Follow from '@/views/Follow'
import Payment from '@/views/Payment'
import Profile from '@/views/Profile'

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
    meta: {
      anonymous: true,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      anonymous: true,
    },
  },
  {
    path: '/orders/:id/follow',
    name: 'Follow',
    component: Follow,
    meta: {
      requiresAuth: true,
    },
    props: (route) => ({ id: route.params.id }),
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment,
    meta: {
      requiresAuth: true,
    },
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
    path: '/deliveryorders',
    name: 'DeliveryOrders',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DeliveryOrders.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/deliveryhistory',
    name: 'DeliveryHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/DeliveryHistory.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/storeorders',
    name: 'StoreOrders',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StoreOrders.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/storehistory',
    name: 'StoreHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/StoreHistory.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/userhistory',
    name: 'UserHistory',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/UserHistory.vue'),
    meta: {
      requiresAuth: true,
    },
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
    if (
      Vue.$cookies.isKey('jwt') &&
      to.matched.some((record) => record.meta.anonymous)
    ) {
      next('/')
      return
    }
    next()
  }
})

export default router
