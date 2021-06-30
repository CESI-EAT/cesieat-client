import { request } from '../../utils/request'

// initial state
const state = () => ({
  status: null,
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products
  },

  decrementProductInventory(state, { id }) {
    const product = state.all.find((product) => product.id === id)
    product.inventory--
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
