const connection = require('../../connection.js');

const findAllGroupBy = (groupBy) => {
    
    return new Promise ((resolve,reject) => {
        groupBy = groupBy.join(',').trim();
        
        let statement = 'SELECT employee.id, first_name, last_name, title, salary, department_name FROM employee INNER JOIN employee_role ON employee.role_id = employee_role.id INNER JOIN department ON employee_role.department_id = department.id ORDER BY ?? DESC;';
        statement = statement.replace('??',`${groupBy}`);
        console.log(statement);

        connection.query(statement,(error,results)=>{

            if (error) reject(error);
            
            resolve(results);
        });
    });
}

module.exports = findAllGroupBy;
