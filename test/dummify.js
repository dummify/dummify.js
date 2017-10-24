'use strict';

var mysql = require('mysql');
var assert = require('assert');
var expect = require('expect.js');

var Dummify = require('../index');

describe('Dummify Object', () => {

  it('should create an Dummify object', () => {
    let connection = mysql.createConnection({
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_SCHEMA,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASS,
    });

    expect(Dummify.to(connection), 'to be a', Dummify);
  });

});