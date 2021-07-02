import Vue from 'vue'

export const configureSocket = (state) => {
  const socket = state.socket
  socket.on('connection', () => {
    console.log('socket connected')
  })

  socket.on('message', (msg) => {
    Vue.toasted.show(msg)
  })

  socket.on('disconnect', () => {
    console.log('socket disconnected')
  })
}
