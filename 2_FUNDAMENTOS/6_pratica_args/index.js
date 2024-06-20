const minimist = require('minimist')
const soma = require('./soma').soma

const args = minimist(process.argv.slice(2))

const b = parseInt(args['b'])
const a = parseInt(args['a'])

soma(b, a)
