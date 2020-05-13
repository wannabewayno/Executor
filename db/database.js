// Handles all database queries
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

const SQL = {};
// takes in a query, returns a promise with the result of that query
SQL.query = query => {
    return new Promise((resolve,reject) => {
        connection.query(query,(error, results)=>{
            if (error) reject(error);

            resolve(results);
            });
    });
};

module.exports = SQL;

// connection.query('SELECT * FROM employee WHERE id = 3', (error, results)=>{
//     if (error) throw error;

//     console.log(results);
//     connection.end()
// });


// //CREATE
// connection.query('INSERT INTO favourite_music (title, artist, genre) VALUES ("for whom the bell tolls","Metallica","Metal")',(error,results) => {
//     if (error) throw new Error("error retrieving data from database");
//     console.log(results);
// })
// //READ
// connection.query('SELECT * FROM favourite_music', (error,results,fields) =>{
//     if (error) throw new Error("error retrieving data from database");
//     console.log(results);
// });
// //UPATE
// connection.query('UPDATE favourite_music SET artist = "MegaDeath" WHERE artist = "Metallica"', (error,results,fields) =>{
//     if (error) throw new Error("error retrieving data from database");
//     console.log(results);
// });
// //DELETE 
// connection.query('DELETE FROM favourite_music WHERE artist = "MegaDeath"', (error,results,fields) =>{
//     if (error) throw new Error("error retrieving data from database");
//     console.log('deleted ' + results.affectedRows + ' rows');
// });

// Example from NPM DOCS. ALternative Way to add material
// var post  = {id: 1, title: 'Hello MySQL'};
// var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
//   if (error) throw error;
//   // Neat!
// });
// console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
