const connection = require('../../connection.js');

const viewTable = (tableName,joinTable) => {
    console.log(tableName);
    return new Promise ((resolve,reject) => {

        let statement = 'SELECT * FROM ?? ??';

        statement = statement.replace('??',`${tableName}`);
        console.log(statement);
        if (joinTable !== null){
            statement = statement.replace('??',`INNER JOIN ${joinTable.tableName} USING (${joinTable.key})`);
        } else {
            statement = statement.replace(' ??',';');
        }
        console.log(statement);
        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = viewTable;