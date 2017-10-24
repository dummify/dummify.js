'use strict';

const Database = require('./relational-structure/database');
const DatabaseIterator = require('./iterators/database_iterator');

/**
 * Dummify class
 */
class Dummify
{

  /**
   * Dummify constructor
   * @param {Connection} connection 
   */
  constructor(connection) {
    this.createDatabase = this.createDatabase.bind(this);
    this.select = this.select.bind(this);
    this.run = this.run.bind(this);

    this.connection = connection
    this.databases = [];
    this.databaseSelected = null;
  }

  /**
   * 
   * @param {Connection} connection 
   */
  static to(connection) {
    return new Dummify(connection);
  }

  /**
   * @param {string} databaseName 
   */
  async createDatabase(databaseName)
  {
    return new Database(databaseName);
  }

  /**
   * 
   * @param {String} databaseName
   */
  async select(databaseName, callable)
  {
    let database = this.databases[databaseName] || null;

    if(!this.databases[databaseName]) {
      database = await this.createDatabase(databaseName);
      this.databases[databaseName] = database;
    }

    await callable(database);
    return this;
  }

  /**
   * @param {string} databaseName 
   */
  async run(databaseName = null)
  {
    if(databaseName === null && this.databaseSelected === null) {
      throw new Error('database-not-selected');
    }

    return Promise
      .resolve(new DatabaseIterator(this.databaseSelected))
      .then(iterator => iterator.run());
  }

  close() {
    this.connection.close();
  }
}

module.exports = Dummify;