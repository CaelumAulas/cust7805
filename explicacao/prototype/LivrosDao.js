function LivrosDao() {
  console.log('CRIOU')
}

LivrosDao.prototype.getAll = function() {
  console.log('GETALL')
}

const livrosDao = new LivrosDao()
livrosDao.getAll()

LivrosDao.prototype.coiso = function() {
  console.log('coiso')
}

livrosDao.coiso()