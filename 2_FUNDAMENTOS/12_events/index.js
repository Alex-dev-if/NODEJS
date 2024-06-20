const EventEmitter = require('events')

const eventEmitter = new EventEmitter()

eventEmitter.on('clicou', () => {
  console.log("Durante")

})

console.log("Começou")

eventEmitter.emit('clicou')

console.log("Acabou")