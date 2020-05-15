//a mapping object that maps an input to database fields
dbMap = {
    Employee:{
        tableName:'employee',
        columnNames:['id','first_name','last_name'],
        formatOptions:{
            displayColumns:['first_name','last_name'],
            valueColumns:['id','first_name','last_name'],
            callbackName:null
        }
    },
    Department:{
        tableName:'department',
        columnNames:['department_id','department_name'],
        formatOptions:{
            displayColumns:['department_name'],
            valueColumns:['department_id','first_name','last_name'],
            callbackName:null
        }
    },
    Role:{
        tableName:'employee_role',
        columnNames:['role_id','title','salary'],
        formatOptions:{
            displayColumns:['title'],
            valueColumns:['role_id','title','salary'],
            callbackName:null
        }
    }
}
module.exports = dbMap