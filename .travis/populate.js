'use strict';

require('dotenv').config();
var mysql = require('mysql');
var faker = require('faker');

var connection = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_SCHEMA,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  multipleStatements: true
});  

var values = [];
for(var i=0; i<100; i++) {
  values.push(`("${faker.name.firstName()}", "${faker.name.lastName()}", "${faker.internet.email()}", "${faker.random.alphaNumeric(127)}")`);
}

var query = 'INSERT INTO users (name_first, name_last, email, password) VALUES ' + values.join(',') + ';';

connection.query(query, (err, res, fields) => {
  if(err) throw new Error(err.message);
  connection.end();
});
