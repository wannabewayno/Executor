const SQL = require('./dbInterface.js');
// const search = require('./../lib/autocomplete.js');
const connection = require('./connection.js');

const orm = {};

orm.listFormat = (dbResult,...columnNames) => {
    
    const choices = dbResult.map(rowObj => {
        return {
            name:columnNames.map(key => rowObj[key]).join(' '),
            value:{function:'switch',variable:'mainMenu'}
        }
        //TODO change variables to format that can be plugged into build query.
    });
    return choices;
}

orm.findAllListFormat = (tableName,...columnNames) => {

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
            columnNames = columnNames.split(',')
            const choices = orm.listFormat(results,...columnNames);
            resolve(choices);
        });
    });
}

orm.findAll = (tableName,...columnNames) => {

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
            
            resolve(choices);
        });
    });
}

module.exports = orm 