const consign = require('consign')
const express = require('express')
const port = 3001
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('./public'))

consign()
  .include('./routers')
  .then('./infra')
  .into(server)

server.use((req, res) => {
  res.send('Essa página não existe!')
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})