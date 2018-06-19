const http = require('http')
const port = 8080
const ip = 'localhost' // 127.0.0.1 || 0.0.0.0

const server = http.createServer((req, res) => {
  const rota = []

  rota['/'] = '<h1>Home</h1>'
  rota['/contato'] = '<h1>Contato</h1>'

  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(rota[req.url] || '<html><meta charset="utf-8"><h1>Não tem!</h1></html>')
})

server.listen(port, ip, () => {
  console.log('Servidor de pé em http://' + ip + ':' + port)
  console.log(`Servidor de pé em http://${ip}:${port}`)
  console.log('Pra derrubar o servidor: ctrl + c')
})