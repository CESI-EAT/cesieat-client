import { request } from '../../utils/request'

// initial state
const state = () => ({
  status: '',
  user: null,
})

// getters
const getters = {
  isLoggedIn: (state) => !!state.user,
}

// actions
const actions = {
  async getUser({ commit, state }) {
    commit('setStatus', 'loading')
    try {
      const res = await request('me', 'get')
      commit('setUser', res.data)
      commit('setStatus', 'success')
    } catch (err) {
      commit('setUser', null)
      commit('setStatus', 'failed')
    }
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setStatus(state, status) {
    state.status = status
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
