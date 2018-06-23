const connectionFactory = require('../infra/connectFactory')()
const LivrosDao = require('../dao/LivrosDao')

class LivrosController {
  getAll(req, res) {
    const connection = connectionFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.getAll((error, livros, fields) => {
      res.render('produtos/lista', {livros})
    })

    connection.end()
  }

  save(req, res)  {
    const livro = req.body
    const connection = connectionFactory()
    const livrosDao = new LivrosDao(connection)

    livrosDao.save(livro, (error, result) => {
      console.log(error)
      res.redirect('/produtos')
    })

    connection.end()
  }

  show(req, res) {
    res.render('produtos/form')
  }
}

module.exports = new LivrosController()