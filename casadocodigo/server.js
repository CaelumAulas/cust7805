const express = require('express')
const port = 3001
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))

require('./rotas')(server)

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})