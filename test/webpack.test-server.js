'use strict'

let webpack = require('webpack')
let path = require('path')


module.exports = {
  context: __dirname,
  entry: {
        bundle: [
          `webpack-dev-server/client?http://localhost:8080/sockjs-node`,
          'webpack/hot/only-dev-server',
          './index.js'
        ]
    },

  output:{
    path: '/',
    publicPath: 'lib/'
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loaders: ['babel','ts-loader'], exclude: [/node_modules/]},
      { test: /\.js(x?)$/, loaders: ['babel'], exclude: [/node_modules/]}
    ]
  },

  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  ts: {
    compiler: 'typescript'
  },

  resolve: {
       root: [path.resolve('node_modules'), path.resolve('src')],
       extensions: [
         '', '.js', '.jsx',
         '.ts', '.tsx'
       ]
  },
  devServer: {

    // HMR configuration
    host: "localhost", // Used for client connection
    port: 8080,
    path: "",

    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: '/lib/', // Where to serve assets from
    filename: "bundle.js",
    stats: {
      colors: true,
      hash: false,
      timings: false,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: false,
      children: true
    }
  }
}
