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
  async logout({ commit }) {
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
      const { data } = await request.patch(`/users/${userId}`, payload)
      commit('setUser', data.user)
      commit('setStatus', 'success')
    } catch (err) {
      commit('setStatus', 'failed')
    }
  },

  async changePassword({ commit }, payload) {
    commit('setStatus', 'loading')
    try {
      await request.post(`/change-password`, payload)
      commit('setStatus', 'success')
    } catch (err) {
      commit('setStatus', 'failed')
    }
  },
  async register({ commit }, payload) {
    commit('setStatus', 'loading')
    try {
      const { data } = request.post(`/register`, payload)
      commit('setUser', data.user)
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
