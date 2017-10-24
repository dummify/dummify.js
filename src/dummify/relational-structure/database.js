'use strict';

const Table = require('./table');
const info = console.info;

/**
 * Database class
 */
class Database
{

  /**
   * Database constructor
   * @param {String} name 
   */
  constructor (name) {
    this.clear = this.clear.bind(this);
    this.addTable = this.addTable.bind(this);

    this.name = name;
    this.tables = [];

    info(`  DB ${this.name}`)
  }

  /**
   * Remove all tables from database list.
   */
  clear () {
    this.tables = [];
    return this;
  }

  /**
   * Adds a table to the list.
   * @param {String} table 
   */
  addTable (tableName, callable) {
    let self = this;
    
    let table = new Table(this, tableName)
    this.tables.push(table);
    callable(table);

    info();
    return self;

    /*
    return Promise.resolve(() => {
      let table = new Table(this, tableName)
      this.tables.push(table);
      return table;
    })
    .then(table => {
      return Promise.resolve(callable(table));
    })
    .then(() => {
      return self;
    })
    */
  }
}

module.exports = Database;