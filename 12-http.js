const http = require('http')

//first parameter is incoming request (when user requests your page), second is the response we send back
const server = http.createServer((req, res)=>{
    //console.log(req);
    if(req.url === '/'){
        res.end('welcome to my homepage')
    }

    if(req.url === '/about'){
        res.end('Here is our short history')
    }

    res.end(`<h1>oops</h1> <a href="/">home</a>`)
})

//what port to listen for
server.listen(5000)