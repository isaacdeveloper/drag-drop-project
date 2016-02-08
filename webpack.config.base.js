'use strict'

/**
 * Accepts as environment variables the following
 * @env NODE_ENV - Defines the node_env variable
 * @env COMPRESS - Uses minification
 * @env DEBUG - Enables debug mode on the application
 */

let webpack = require('webpack')
let path = require('path')

// A set of libraries that will be included but not parsed
let pathToReact = path.resolve('node_modules/react/dist/react-with-addons.js')
let pathToRouter = path.resolve('node_modules/react-router/umd/ReactRouter.min.js')
let pathToRedux = path.resolve('node_modules/redux/dist/redux.min.js')
let pathToMaterial = path.resolve('node_modules/react-mdl/extra/material.min.js')
let pathToMoment = path.resolve('node_modules/moment/min/moment-with-locales.min.js')

var ExtractTextPlugin = require("extract-text-webpack-plugin");

let plugins = [
  new ExtractTextPlugin("styles.css"),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    __DEV__: JSON.stringify(process.env.DEBUG)
  })
]

if (process.env.COMPRESS) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  )
}

module.exports = {

  externals: {},

  module: {
    preLoaders: [
      // { test: /\.(js|jsx)$/, loaders: ['jscs'], exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.(js|jsx)$/, loaders: ['react-hot', 'babel'], exclude: /(node_modules|lib\/webcomponents)/ },
      { test: /\.ts(x?)$/, loaders: ['react-hot', 'ts-loader'], exclude: /node_modules/ },
      { test: /node_modules.*\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css'), exclude: /node_modules/ },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', ['css', 'postcss'])},
      { test: /\.upcss$/, loader: ExtractTextPlugin.extract('style', ['css'])},
      { test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=100000' },
      { test: /\.(jpg|gif)$/, loader: 'url-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ],
    noParse: [
      /* Regex ot path */

      // pathToReact,
      // pathToRedux,
      // pathToRouter will generate an undefined call to 'require'
      pathToMaterial,
      pathToMoment
    ]
  },

  resolve: {
    root: [path.resolve('node_modules'), path.resolve('src/lib'), path.resolve('src')],
    extensions: [
      '', '.js', '.jsx',
      '.ts', '.tsx',
      '.css',
      '.woff', '.woff2', '.ttf', '.eot', '.svg'
    ],
    alias: {
      // react: 'react/addons',
      // 'react/addons': pathToReact,
      // 'react-router': pathToRouter,
      // redux: pathToRedux
      moment: pathToMoment
    }
  },

  plugins: plugins,

  devtool: process.env.COMPRESS ? null : 'inline-source-map',

  ts: {
    compiler: 'typescript'
  },

  postcss: function() {
    return {
      defaults: [

        // Needed for importing
        require('postcss-import')({
          onImport: function(files) {
            files.forEach(this.addDependency)
          }.bind(this)
        }),
        require('postcss-nested'),
        require('postcss-custom-properties')(),
        require('cssnano')(),
        require('rucksack-css')(),
        require('autoprefixer')({browsers: ['> 5%', 'IE 9', 'IE 11']})
      ]
    }
  }
}
