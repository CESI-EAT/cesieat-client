const fs = require('fs')

module.exports = {
  transpileDependencies: ['vuetify'],
  devServer: {
    https: {
      key: fs.readFileSync('./src/assets/certs/privkey1.pem'),
      cert: fs.readFileSync('./src/assets/certs/cert1.pem'),
    },
    disableHostCheck: true,
    public: 'https://localhost:9377/',
  },
}
