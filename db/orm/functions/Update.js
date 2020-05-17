const connection = require('./../../connection.js');
const extractId = require('./extractId.js');

const Update = (queryObj) => {
    
    let { columnName, input } = queryObj;
    id = extractId(queryObj);

    return new Promise ((resolve,reject) => {
        //yes I know I'm better than this, but it wasn't working the other way and I was out of time, soz.
        let statement = 'UPDATE employee LEFT JOIN employee_role USING (role_id) LEFT JOIN department USING (department_id) SET ?? WHERE ??';
        
        if ( !isNaN(input) ){
            console.log(input);
            input = parseInt(input);
            statement = statement.replace('??',`${columnName} = ${input}`);
        } else {
            statement = statement.replace('??',`${columnName} = '${input}'`);
        }

        statement = statement.replace('??',`${id.name} = ${id.value}`)

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = Update;