const connection = require('./../../connection.js');

const findAll = (queryObj) => {
    let { tableName, columnNames } = queryObj;
    return new Promise ((resolve,reject) => {
        if (columnNames.length === 0) {
            columnNames = '*'
        } else {
            columnNames = columnNames.join(',').trim();
        }
        
        let statement = 'SELECT ?? FROM ??';
        statement = statement.replace('??',columnNames);
        statement = statement.replace('??',tableName);

        connection.query(statement/*,[columnNames,tableName]*/,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = findAll;
