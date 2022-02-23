const EventEmitter = require('events')

//Create custom event 

const myCustomEmitter = new EventEmitter()

myCustomEmitter.on('sayHello', (name)=>{
    console.info(`Hello ${name}`)
})

myCustomEmitter.emit('sayHello', 'Handy')