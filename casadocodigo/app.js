const mysql = require('mysql')

function rotas(server) {
  server.use((req, res, next) => {
    console.log(req.url)
    next()
  })

  // JSON -> JavaScript Object Notation
  server.get('/', (req, res) => {
    res.render('index')
  })

  server.get('/coiso', (req, res) => {
    res.send('Coisado')
  })

  server.get('/contato', (req, res) => {
    res.render('contato')
  })

  server.get('/produtos', (req, res) => {
    const connection = mysql.createConnection({
      user: 'root',
      password: '',
      database: 'lojanode',
      host: 'localhost' 
    })

    connection.query('SELECT * FROM livros', (error, livros, fields) => {
      res.render('produtos/lista', {livros})
    })
  })

  server.use((req, res) => {
    res.send('Essa página não existe!')
  })
}

function coiso() {
  console.log('oi')
}

module.exports = {
  rotas,
  coiso
}