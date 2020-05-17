const connection = require('../../connection.js');
const extractId = require('./extractId.js');

const findBy = (queryObj) => {

    return new Promise ((resolve,reject) => {

        id = extractId(queryObj);
        
        let statement = 'SELECT id, first_name, last_name, title, salary, department_name FROM employee INNER JOIN employee_role USING (role_id) INNER JOIN department USING (department_id) WHERE ??;';
        statement = statement.replace('??',`${id.name} = ${id.value}`);

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = findBy;