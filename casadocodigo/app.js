const express = require('express')
const port = 3001

const server = express()

server.set('view engine', 'ejs')

server.use((req, res, next) => {
  console.log(req.url)
  next()
})
// JSON -> JavaScript Object Notation
server.get('/', (req, res) => {
  res.render('index')
})

server.get('/contato', (req, res) => {
  res.render('contato')
})

server.use((req, res) => {
  res.send('Essa página não existe!')
})

server.listen(port, () => {
  console.log(`Servidor de pé em http://localhost:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})