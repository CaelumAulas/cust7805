const LivrosDao = require('../dao/LivrosDao')

function produtos(server) {
  server.get('/produtos', (req, res) => {
    const connection = server.infra.connectFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.getAll((error, livros, fields) => {
      res.render('produtos/lista', {livros})
    })

    connection.end()
  })
}

module.exports = produtos
