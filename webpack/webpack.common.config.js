const path = require('path')

const config = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js'
  }
}

module.exports = config