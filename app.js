const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', ()=>{
    console.log('event emitted');
})
customEmitter.on('response', ()=>{
    console.log('some other logic here');
})

customEmitter.emit('response')