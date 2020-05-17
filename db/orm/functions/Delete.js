const connection = require('../../connection.js');
const extractId =  require('./extractId.js');

const Delete = (queryObj) => {
    let { tableName } = queryObj;
    id = extractId(queryObj);

    return new Promise ((resolve,reject) => {
         
        let statement = 'DELETE FROM ?? WHERE ??';
        statement = statement.replace('??',tableName);
        statement = statement.replace('??',`${id.name} = ${id.value}`);

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = Delete;