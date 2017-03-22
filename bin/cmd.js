'use strict'

var argv = require('minimist')(process.argv.slice(2), {
  boolean: ['file'],
  alias: {
    'file': 'f'
  }
})
console.log(argv)
