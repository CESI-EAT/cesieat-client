import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {},
  },
  getters: {
    jwt: (state) => state.token || null,
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_success(state, authRes) {
      state.user = authRes.user
      state.token = authRes.token
    },
    logout(state) {
      state.user = null
      state.token = null
    },
  },
  actions: {},
  modules: {},
})
