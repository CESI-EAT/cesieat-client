import { baseSocketURL } from '../../utils/url'
import { io } from 'socket.io-client'
import { configureSocket } from '../../utils/socket'

// initial state
const state = () => ({
  socket: null,
})

// getters
const getters = {
  socket: (state) => state.socket,
}

// actions
const actions = {
  async connect({ commit }) {
    try {
      commit('connectSocket')
    } catch (err) {
      console.error(err)
    }
  },
  async disconnect({ commit }) {
    try {
      commit('disconnectSocket')
    } catch (err) {
      console.error(err)
    }
  },
  async sendMessage({ getters }, config) {
    const { type, payload } = config
    if (type && payload) {
      try {
        getters.socket.emit('message', payload)
      } catch (err) {
        console.error(err)
      }
    } else {
      console.error('invalid sendMessage() config object')
    }
  },
}

// mutations
const mutations = {
  connectSocket(state) {
    const socket = io(baseSocketURL)
    configureSocket(state)
    state.socket = socket
  },
  disconnectSocket(state) {
    state.socket.disconnect()
    state.socket = null
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
