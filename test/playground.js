require('babel-polyfill')

// Global configuration
require('../lib/config')

// Vendor Globals (not used by typescript)
require('../lib/globals')

// Marx style (CSS Reset/Normalizr)
// require('../assets/style/marx.min.css')

// CSS Libs
// require('font-awesome/css/font-awesome.css')
/* Roboto Font and Material Icons */
require('../assets/style/material.upcss')

// JS Libs
require('react-mdl/extra/material.min.js')

// Application entries
require('../assets/style/app.css')

//require('../src/components/__tests__/sidebar-playground')
require('../src/containers/__tests__/todos-playground')