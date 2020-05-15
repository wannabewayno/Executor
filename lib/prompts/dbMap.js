//a mapping object that maps an input to database fields
dbMap = {
    Employee:{
        tableName:'employee',
        columnNames:['first_name','last_name']
    },
    Department:{
        tableName:'department',
        columnNames:['department_name']
    },
    Role:{
        tableName:'employee_role',
        columnNames:['title']
    }
}
module.exports = dbMap