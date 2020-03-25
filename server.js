const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const port = process.env.PORT || 4500
const playersRouter = require("./routes/players")

// Now use cors to enable Cross-Origin Resource Sharing.
app.use(cors())

// Also, use body-parser to handle HTTP POST requests.
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use("/players", playersRouter)
 
app.listen(port, () => console.log(`Server is up on port ${port}`))


module.exports = app












// // When creating a server you need to require http first
// const http = require('http')
// const fs = require('fs')

// let server = http.createServer((req, res) => {
//      if(req.url === '/home' || req.url === '/'){
//             res.writeHead(200, {'content-Type':'text/html'})
//             fs.createReadStream('./index.html', 'utf8').pipe(res)
//      } else if(req.url === '/contact'){
//             res.writeHead(200, {'content-Type':'text/html'})
//             fs.createReadStream('./contact.html', 'utf8').pipe(res) 
//      } else if(req.url === '/api/ninjas'){
//             let ninjas = [{name: 'Wian', age: 30}, {name: 'Shark', age: 43}]
//             res.writeHead(200, {'content-Type':'application/json'})
//             res.end(JSON.stringify(ninjas))
//      } else{
//             res.writeHead(200, {'content-Type':'text/html'})
//             fs.createReadStream('./404.html', 'utf8').pipe(res)
//      }
// })

// server.listen(3000, '127.0.0.1')