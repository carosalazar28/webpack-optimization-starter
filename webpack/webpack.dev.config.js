const common = require('./webpack.common.config')
const { merge } = require('webpack-merge')
const path = require('path')

module.exports = merge(common, {
  output: {
    filename: 'main.js'
  },
  mode: 'development',
  devServer: {
    port: 9000,
    static: {
      directory: path.resolve(__dirname, '../build')
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
    client: {
      overlay: true,
    },
    liveReload: false,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.css$/,
        include: /\.module\.css$/,
        use: [
          'style-loader', {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]--[md4:hash:7]'
              }
            }
          }
        ]
      }
    ]
  }
})