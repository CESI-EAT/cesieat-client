import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    jwt: (state) => (state.user ? state.user.jwt : null),
  },
  mutations: {},
  actions: {},
  modules: {},
})
