import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import stores from './modules/stores'
import orders from './modules/orders'
import socket from './modules/socket'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    auth,
    stores,
    orders,
    socket,
  },
  strict: debug,
})
