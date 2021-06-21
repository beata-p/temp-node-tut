const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id) =>{  //accepts two parameters
    console.log(`data received name: ${name} id: ${id}`);
})


customEmitter.on('response', () =>{
    console.log(`some other logic received`);
})

//first you need to listen for an event only then can you emit an event
customEmitter.emit('response', 'john', 34) //you can pass arguments through to the event listener