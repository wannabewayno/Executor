const mysql = require('mysql');
// connects to the database
const connectionConfig = {
    host:'localhost',
    user:'root',
    password:'root',
    database:'employee_db'
};

const connection = mysql.createConnection(connectionConfig);

connection.connect(error => {
    if (error) {
        throw new Error(`Error with connection ${error.stack}`)
    }

    console.log(`connected as id:${connection.threadId}`);
});

module.exports = connection;