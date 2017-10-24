'use strict';

const Database = require('../relational-structure/database');

/**
 * DatabaseIterator class
 */
class DatabaseIterator
{
  /**
   * DatabaseIterator constructor
   * @param {Database} database 
   */
  constructor(database) {
    this.run = this.run.bind(this);

    this.database = database;
  }

  /**
   * Runner
   */
  run () {
    
  }
}

module.exports = DatabaseIterator;