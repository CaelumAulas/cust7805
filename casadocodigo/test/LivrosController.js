const server = require('../custom-express')
const request = require('supertest')(server)
// const supertest = require('supertest')
// const request = supertest(server)

describe('#LivrosController', function() {
  it('fazer um request para lista de produto e tem que voltar um HTML', function(done) {
    request.get('/produtos')
           .set('Accept', 'text/html')
           .expect('Content-type', /json/)
           .expect(200, done)
  })
})