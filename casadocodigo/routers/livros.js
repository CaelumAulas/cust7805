const LivrosController = require('../controller/LivrosController')

function livros(server) {
  server.get( '/produtos', LivrosController.getAll)
  server.post('/produtos', LivrosController.save)
  server.get('/produtos/form', LivrosController.show)
  // server.get('/produtos/form', (req, res) => res.render('produtos/form'))
}

module.exports = livros
