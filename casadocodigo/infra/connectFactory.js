const mysql = require('mysql')

function connectionFactory() {
  const connection = mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST 
  })

 return connection
}

module.exports = () => connectionFactory
// module.exports = function() {
//  return connectionFactory
// }