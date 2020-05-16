const connection = require('./../../connection.js');

const Create = (queryObj) => {

    let { tableName, columnNames } = queryObj;

    return new Promise ((resolve,reject) => {
        if (columnNames.length === 0) {
            columnNames = '*'
        } else {
            columnNames = columnNames.join(',').trim();
        }
        // values first_name,last_name,role(needs to be an sql query) will need to select that,
        let statement = 'INSERT INTO ?? VALUES ??';
        statement = statement.replace('??',columnNames);
        statement = statement.replace('??',tableName);

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = Create;


//INSERT INTO favourite_music (title, artist, genre) VALUES ("for whom the bell tolls","Metallica","Metal")'