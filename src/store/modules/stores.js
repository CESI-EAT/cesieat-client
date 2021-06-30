import { request } from '../../utils/request'

// initial state
const state = () => ({
  all: [],
  status: null,
})

// getters
const getters = {
  stores: (state) => state.all,
  loading: (state) => state.status === 'loading',
}

// actions
const actions = {
  async findAll({ commit }, params) {
    commit('setStatus', 'loading')
    try {
      const { data: stores } = await request.get('stores', { params })
      commit('setStores', stores)
      commit('setStatus', 'success')
    } catch (err) {
      console.log(err)
      commit('setStatus', 'failed')
    }
  },
}

// mutations
const mutations = {
  setStores(state, stores) {
    state.all = stores
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
