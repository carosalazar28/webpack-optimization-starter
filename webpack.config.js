const path = require('path')

const config = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  mode: 'production'
}

module.exports = config