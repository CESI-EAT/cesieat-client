import { request } from '../../utils/request'

// initial state
const state = () => ({
  orders: [],
  order: null,
  cart: null,
  isLoading: false,
  isUpdating: false,
  isCreating: false,
  isCartValidating: false,
})

// getters
const getters = {
  orders: (state) => state.orders,
  order: (state) => state.order,
  cart: (state) => state.cart,
  isLoading: (state) => state.isLoading,
  isUpdating: (state) => state.isUpdating,
  isCreating: (state) => state.isCreating,
  isCartValidating: (state) => state.isCartValidating,
}

// actions
const actions = {
  async findAll({ commit }, params) {
    commit('setOrdersIsLoading', true)
    try {
      const { data: orders } = await request.get('orders', { params })
      commit('setOrders', orders)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsLoading', false)
  },

  async findMyOrders({ commit }, userId) {
    commit('setOrdersIsLoading', true)
    try {
      const { data: orders } = await request.get(`users/${userId}/orders`)
      commit('setOrders', orders)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsLoading', false)
  },

  async validate({ commit, state }) {
    commit('setOrdersIsUpdating', true)
    try {
      const res = await request.post(`orders/${state.currentOrder.id}/validate`)
      commit('updateOrder', res.data.order)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsUpdating', false)
  },

  async createOrder({ commit, state }, payload) {
    commit('setOrdersIsCreating', true)
    try {
      const res = await request.post(`orders`, payload)
      commit('setOrders', res.data.orders)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsCreating', false)
  },

  async findOrder({ commit, state }, orderId) {
    commit('setOrdersIsLoading', true)
    try {
      const { data: order } = await request.get(`orders/${orderId}`)
      commit('setCurrentOrder', order)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsLoading', false)
  },

  async updateOrder({ commit, state }, payload) {
    commit('setOrdersIsUpdating', true)
    try {
      const res = await request.patch(
        `orders/${state.currentOrder.id}`,
        payload
      )
      commit('setCurrentOrder', res.data.order)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsUpdating', false)
  },

  async deleteOrder({ commit, state }, orderId) {
    commit('setOrdersIsDeleting', true)
    try {
      await request.delete(`orders/${orderId || state.currentOrder.id}`)
      commit('deleteOrder', orderId || state.currentOrder.id)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsDeleting', false)
  },

  async validCart({ commit }, payload) {
    commit('setCartIsLoading', true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      commit('setCart', payload)
    } catch (err) {
      console.log(err)
    }
    commit('setCartIsLoading', false)
  },
}

// mutations
const mutations = {
  addOrder(state, payload) {
    state.orders.push(payload)
    state.order = payload
  },
  deleteOrder(state, orderId) {
    state.orders.filter((o) => o.id !== orderId)
    state.order = null
  },
  updateOrder(state, payload) {
    state.orders.unshift(payload)
    state.order = payload
  },
  setOrders(state, orders) {
    state.orders = orders
  },
  setOrder(state, order) {
    state.order = order
  },
  setCart(state, cart) {
    state.cart = cart
  },
  setOrderIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setOrderIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },
  setOrderIsUpdating(state, isUpdating) {
    state.isUpdating = isUpdating
  },
  setOrderDeleting(state, isDeleting) {
    state.isDeleting = isDeleting
  },
  setCartIsLoading(state, isCartValidating) {
    state.isCartValidating = isCartValidating
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
