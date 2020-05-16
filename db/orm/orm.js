//placeholder to store and export all ORM functions

const orm = {};

orm.findAllListFormat   = require('./functions/findAllListFormat');
orm.findAll             = require('./functions/findAll.js');
orm.Delete              = require('./functions/Delete.js');

module.exports = orm;