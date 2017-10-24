#!/usr/bin/env node
'use strict';
const program = require('commander');
const dummify = require('./src/index.js');

program
  .version('1.0.0')
  .parse(process.argv);