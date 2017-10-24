'use strict';

const mysql = require('mysql');
const assert = require('assert');
const expect = require('expect.js');

const Dummify = require('../index');

describe('Dummify Object', () => {

  it('should create an Dummify object', () => {
    const connection = mysql.createConnection({
      host     : '192.168.0.1',
      database : 'example',
      user     : 'root',
      password : 'password'
    });

    expect(Dummify.to(connection), 'to be a', Dummify);
  });

});