const connection = require('./../../connection.js');

const Update = (queryObj) => {
    let { tableName, columnName, input, id } = queryObj;
  
    return new Promise ((resolve,reject) => {
        //yes I know I'm better than this, but it wasn't working the other way and I was out of time, soz.
        let statement = 'UPDATE ?? SET ?? WHERE ??';
        statement = statement.replace('??',tableName);
        statement = statement.replace('??',`${columnName} = '${input}'`);
        statement = statement.replace('??',`id = ${id}`)

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = Update;