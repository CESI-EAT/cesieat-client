import { request } from '../../utils/request'

// initial state
const state = () => ({
  stores: [],
  isLoading: false,
  isUpdating: false,
  isCreating: false,
})

// getters
const getters = {
  stores: (state) => state.stores,
  isLoading: (state) => state.isLoading,
  isUpdating: (state) => state.isUpdating,
  isCreating: (state) => state.isCreating,
}

// actions
const actions = {
  async findAll({ commit }, params) {
    commit('setStoresIsLoading', true)
    try {
      const { data: stores } = await request.get('stores', { params })
      commit('setStores', stores)
    } catch (err) {
      console.log(err)
    }
    commit('setStoresIsLoading', false)
  },

  async findStore({ commit }, storeId) {
    commit('setStoresIsLoading', true)
    try {
      const { data: store } = await request.get(`stores/${storeId}`)
      commit('setCurrentStore', store)
    } catch (err) {
      console.log(err)
    }
    commit('setStoresIsLoading', false)
  },
}

// mutations
const mutations = {
  setStores(state, stores) {
    state.stores = stores
  },
  setStore(state, store) {
    state.store = store
  },
  setStoresIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setStoresIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },
  setStoresIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
