const LivrosDao = require('../dao/LivrosDao')

function livros(server) {
  server.get('/produtos', (req, res) => {
    const connection = server.infra.connectFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.getAll((error, livros, fields) => {
      res.render('produtos/lista', {livros})
    })

    connection.end()
  })

  server.post('/produtos', (req, res) => {
    const livro = req.body
    const connection = server.infra.connectFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.save(livro, () => {
      res.redirect('/produtos')      
    })

    connection.end()
  })

  server.get('/produtos/form', (req, res) => {
    res.render('produtos/form')
  })

  
}

module.exports = livros
