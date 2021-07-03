import router from '../../router'
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
  hasOrderInProgress: (state) => state.order !== null,
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
  async loadHistory({ commit }, userId) {
    commit('setOrdersIsLoading', true)
    try {
      const { data: orders } = await request.get(`users/${userId}/orders`)
      commit('setOrders', orders)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsLoading', false)
  },

  async createOrder({ commit }, payload) {
    commit('setOrdersIsCreating', true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const res = await request.post(`orders`, payload)
      commit('addOrder', res.data)
      commit('setOrdersIsCreating', false)
      router.push(`/orders/${res.data._id}/follow`)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsCreating', false)
  },

  async findOrder({ commit }, orderId) {
    commit('setOrdersIsLoading', true)
    try {
      const { data: order } = await request.get(`orders/${orderId}`)
      commit('setOrder', order)
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

  async validate({ commit }, orderId) {
    commit('setOrdersIsUpdating', true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const { data } = await request.post(`/orders/${orderId}/validate`)
      commit('setOrder', data.order)
      if (data.status === 'DELIVERED') {
        router.push(`/history`)
      }
      router.push(`/orders/${orderId}/follow`)
    } catch (err) {
      console.log(err)
    }
    commit('setOrdersIsUpdating', false)
  },

  async validCart({ commit }, payload) {
    commit('setCartIsLoading', true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
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
    console.log('payload: ', payload)
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
  setOrdersIsLoading(state, isLoading) {
    state.isLoading = isLoading
  },
  setOrdersIsCreating(state, isCreating) {
    state.isCreating = isCreating
  },
  setOrdersIsUpdating(state, isUpdating) {
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
