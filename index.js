'use strict';
const mapcodeRegex = require('mapcode-regex');

module.exports = str => str.match(mapcodeRegex()) || [];
