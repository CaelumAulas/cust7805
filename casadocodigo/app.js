const connectionFactory = require('./infra/connectFactory')
const LivrosDao = require('./dao/LivrosDao')

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
    const connection = connectionFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.getAll((error, livros, fields) => {
      res.render('produtos/lista', {livros})
    })

    connection.end()
  })

  server.use((req, res) => {
    res.send('Essa página não existe!')
  })
}

module.exports = rotas