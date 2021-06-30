import { request } from '../../utils/request'

// initial state
const state = () => ({
  status: null,
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
      const res = await request.get('me')
      commit('setUser', res.data)
      commit('setStatus', 'success')
    } catch (err) {
      commit('setUser', null)
      commit('setStatus', 'failed')
    }
  },
  async logout({ commit, state }) {
    commit('setStatus', 'loading')
    try {
      const res = await request.post('logout')
      commit('setUser', null)
      commit('setStatus', 'success')
    } catch (err) {
      commit('setStatus', 'failed')
    }
  },
  async updateProfile({ commit, state }, payload) {
    commit('setStatus', 'loading')
    const userId = state.user.id
    try {
      await request.patch(`/users/${userId}`, payload)
      commit('setUser', Object.assign(state.user, payload))
      commit('setStatus', 'success')
    } catch (err) {
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
