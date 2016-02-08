// Polyfill ES6
require('babel-polyfill')

// Global configuration
require('./config')

// Vendor Globals (not used by typescript)
require('./globals')

// Marx style (CSS Reset/Normalizr)
// require('../assets/style/marx.min.css')

// CSS Libs
// require('font-awesome/css/font-awesome.css')
/* Roboto Font and Material Icons */

// JS Libs
require('react-mdl/extra/material.min.js')

// Application entries

require('../src/playground')
