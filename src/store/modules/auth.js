import router from '../../router'
import { request } from '../../utils/request'

// initial state
const state = () => ({
  user: null,
  myorder: null,
  isLoading: false,
  isUpdating: false,
  isCreating: false,
  isResetingPassword: false,
})

// getters
const getters = {
  isLoggedIn: (state) => !!state.user,
  user: (state) => state.user,
  myorder: (state) => state.myorder,
  hasOrderInProgress: (state) => state.myorder !== null,
  isLoading: (state) => state.isLoading,
  isUpdating: (state) => state.isUpdating,
  isCreating: (state) => state.isCreating,
  isResetingPassword: (state) => state.isResetingPassword,
}

// actions
const actions = {
  async getUser({ commit, dispatch }) {
    commit('setUserIsLoading', true)
    try {
      const res = await request.get('me')
      commit('setUser', res.data)
      if (res.data) {
        await dispatch('getCurrentOrder')
      }
    } catch (err) {
      commit('setUser', null)
    }
    commit('setUserIsLoading', false)
  },

  async getCurrentOrder({ commit }) {
    try {
      const { data: order } = await request.get('myorder')
      commit('setMyOrder', order)
    } catch (err) {
      commit('setMyOrder', null)
    }
  },

  async logout({ commit }) {
    commit('setUserIsLoading', true)
    try {
      await request.post('logout')
      commit('setUser', null)
    } catch (err) {
      console.log(err)
    }
    commit('setUserIsLoading', false)
  },

  async updateProfile({ commit, state }, payload) {
    commit('setUserIsUpdating', true)
    const userId = state.user.id
    try {
      const { data } = await request.patch(`users/${userId}`, payload)
      commit('setUser', data.user)
    } catch (err) {
      console.log(err)
    }
    commit('setUserIsUpdating', false)
  },

  async changePassword({ commit }, payload) {
    commit('setUserIsResetingPassword', true)
    try {
      await request.post(`change-password`, payload)
    } catch (err) {
      console.log(err)
    }
    commit('setUserIsResetingPassword', false)
  },
  async register({ commit }, payload) {
    commit('setUserIsCreating', true)
    try {
      const { data } = await request.post('register', payload)
      commit('setUser', data.user)
      router.push('/')
    } catch (err) {
      console.log(err)
    }
    commit('setUserIsCreating', false)
  },
}

// mutations
const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setMyOrder(state, myorder) {
    state.myorder = myorder
  },
  setUserIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setUserIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },
  setUserIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },
  setUserIsResetingPassword(state, isResetingPassword) {
    state.isResetingPassword = isResetingPassword
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
