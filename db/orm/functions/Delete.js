const connection = require('../../connection.js');

const Delete = (queryObj) => {
    let { tableName, id } = queryObj;
    return new Promise ((resolve,reject) => {
         
        let statement = 'DELETE FROM ?? WHERE id = ??';
        statement = statement.replace('??',tableName);
        statement = statement.replace('??',id);

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = Delete;