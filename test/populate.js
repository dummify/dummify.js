'use strict';

function populate()
{
  var fs = require('fs');
  var mysql = require('mysql');
  var readline = require('readline');

  var connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE_SCHEMA,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    multipleStatements: true
  });

  var query = connection.query(fs.readFileSync('./example.sql'));

  query.on('result', (row, index) => {
    connection.close();
  });
};

module.exports = populate;