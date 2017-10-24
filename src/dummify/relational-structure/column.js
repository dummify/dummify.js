'use strict';

/**
 * Column Class
 */
class Column
{

  /**
   * Column constructor
   * @param {Object} options
   */
  constructor({ name = 'unnamed', type = 'varchar', size = 1}) {
    this.name = name;
    this.type = type;
    this.size = size;
    process.stdout.write(".");
  }
}

module.exports = Column;