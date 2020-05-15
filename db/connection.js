const mysql = require('mysql');
const config = require('./../config/config.js');

// creates a connection to the database using the config object in config.js
const connection = mysql.createConnection(config);

// connects to the database
connection.connect(error => {
    if (error) {
        throw new Error(`Error with connection ${error.stack}`)
    }

    console.log(`connected as id:${connection.threadId}`);
});

// export this connection to use elsewhere
module.exports = connection;