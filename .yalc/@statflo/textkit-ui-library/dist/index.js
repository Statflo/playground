
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./textkit-ui-library.cjs.production.min.js')
} else {
  module.exports = require('./textkit-ui-library.cjs.development.js')
}
