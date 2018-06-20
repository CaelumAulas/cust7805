const express = require('express')
const port = 3001
const server = express()

server.set('view engine', 'ejs')

require('./app.js').rotas(server)
require('./app.js').coiso()

// const objeto = require('./app.js')
// objeto.rotas(server)

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})