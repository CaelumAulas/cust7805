const mysql = require('mysql')

function connectionFactory() {
  const connection = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'lojanode',
    host: 'localhost' 
  })

 return connection
}

module.exports = () => connectionFactory
// module.exports = function() {
//  return connectionFactory
// }