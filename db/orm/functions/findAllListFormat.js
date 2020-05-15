const listFormat = require('./listFormat');
const connection = require('./../../connection.js');

const findAllListFormat = (dbInfo) => {
 
    let { tableName, columnNames, formatOptions } = dbInfo

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

            //prepares columnNames titles
            columnNames = columnNames.split(',')
            
            //maps results to a inquirer choice array
            const choices = listFormat(results,formatOptions);

            //return these results to inquirer
            resolve(choices);
        });
    });
}

module.exports = findAllListFormat;