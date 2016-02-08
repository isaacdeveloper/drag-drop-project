'use strict'

let express = require('express')
let request = require('request')
let path = require('path')

let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config.base.js')

// -------- Entry point -------------------
config.entry = [
  process.env.PLAYGROUND ? './test/playground.js' : './lib/main.js',
]

if (process.env.NODE_ENV != 'production') {
  config.entry = config.entry.concat(
    [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://dev-server:8081'
    ]
  )
}

config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NoErrorsPlugin())

config.output = {}
config.output.path = '/'

// -------- proxy -------------------
let app = express()

// Webpack Hot Updates
app.use(/^.*update\.(json|js)$/, function(req, res) {
  let url = 'http://localhost:8081/lib' + req.baseUrl
  request(url)
  .pipe(res)
})

// Font assets
app.use(/^.*\.(woff|woff2|ttf|eot|svg)$/, function(req, res) {
  let url = 'http://localhost:8081/lib' + req.baseUrl
  request(url)
  .pipe(res)
})

// Server proxying (HTML Push State)
app.use(/^.*\.(js|css|html)$/, function(req, res) {
  let url = 'http://localhost:8081' + req.baseUrl
  request(url)
  .pipe(res)
})

app.use('/*', function(req, res) {
  let url = 'http://localhost:8081/index.html'
  request(url)
  .pipe(res)
})

// ------ webpack-dev-server --------
let server = new WebpackDevServer(webpack(config), {
  contentBase: __dirname,
  hot: true,
  quiet: false,
  noInfo: false,
  publicPath: '/lib',
  historyApiFallback: false,
  stats: { colors: true }
})

// ------ run the two servers -------
server.listen(8081, function() {})

app.listen(8080, function() {
  console.log('Server is listening on port 8080')
})

// ------ Run the mock server --------
if (process.env.MOCK_SERVER) {
  require('./test/mock-server')
}
