//placeholder to store and export all ORM functions

const orm = {};

orm.findAllListFormat   = require('./functions/findAllListFormat.js');
orm.findAllGroupBy      = require('./functions/findAllGroupBy.js');
orm.Delete              = require('./functions/Delete.js');
orm.Update              = require('./functions/Update.js');
orm.Create              = require('./functions/Create.js');
orm.findBy              = require('./functions/findBy.js');
orm.viewTable           = require('./functions/viewTable.js');

module.exports = orm;