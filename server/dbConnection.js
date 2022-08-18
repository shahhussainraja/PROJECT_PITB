const database = require('mysql2');

const connection = database.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sedocs'
  });

module.exports = connection;