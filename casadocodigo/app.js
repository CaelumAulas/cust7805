const express = require('express')
const port = 3001

const server = express()

server.use((req, res, next) => {
  console.log(req.url)
  next()
})

server.get('/', (req, res) => {
  res.send('<h1>Home</h1>')
})

server.get('/contato', (req, res) => {
  res.send('<h1>Contato</h1>')
})

server.use((req, res) => {
  res.send('Essa página não existe!')
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})