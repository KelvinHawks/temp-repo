//http
const http = require('http')

const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end('This is the homepage')
   }
   if(req.url === '/about'){
    res.end('This is information about us')
   }
   res.end(`
   <h1>Oops!</h1>
   <p>We cant find a page you are looking for</p>
   <a href='/'>go back home</a>
   `)
})

server.listen(5001, ()=>{
    console.log('server running on port 5001');
})
// const express = require('express');
// const app = express()

// app.get('/', (req,res)=>{
//     res.send('hello world')
// })

// app.listen(3000, ()=>{
//     console.log('server running on port 3000');
// })
