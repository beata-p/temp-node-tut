const http = require('http')

//here we set up a callback function where if someone visits our server we respond with 'welcome' another way of doing this is by example below using event emitter api
// const server = http.createServer((req, res)=>{
//     res.end('welcome')
// })


// using event emitter API
const server = http.createServer()
//emits request event
//subscribe to it /listen for it/respond to it
//so here we listen for the request on the server
server.on('request', (req,res) => {
    res.end('welcome')
})

server.listen(5000)