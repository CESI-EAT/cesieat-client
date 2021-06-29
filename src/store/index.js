import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    user: null,
  },
  getters: {
    jwt: (state) => state.token || null,
    isLoggedIn: (state) => !!state.user,
    authStatus: (state) => state.status,
  },
  mutations: {
    set_user(state, user) {
      state.user = user
    },
    auth_success(state, authRes) {
      state.isLoggedIn = authRes.user
    },
    logout(state) {
      state.user = null
    },
  },
  actions: {},
  modules: {},
})
