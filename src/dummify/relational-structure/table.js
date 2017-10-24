'use strict';

const Column = require('./column');
const info = console.info;

/**
 * Table class.
 */
class Table
{

  /**
   * Table constructor.
   * @param {*} name 
   */
  constructor(database, name = 'unnamed') {
    this.addColumn = this.addColumn.bind(this);

    this.database = database;
    this.name = name;
    this.columns = [];

    process.stdout.write(`     ${this.name}`)
  }

  /**
   * Adds a column.
   * @param {Object} column 
   */
  addColumn (columnData) {
    let self = this;

    let column = new Column(columnData);
    this.columns.push(column);

    return this;

    /*
    return Promise.resolve(() => {
      let column = new Column(columnData);
      this.columns.push(column);
      return column;
    })
    .then(column => {
      return this;
    })
    */
  }
}

module.exports = Table;