//a mapping object that maps an input to database fields
dbMap = {
    employee:{
        tableName:'employee',
        columnNames:['id','first_name','last_name'],
        formatOptions:{
            displayColumns:['first_name','last_name'],
            callbackName:null
        }
    },
    department:{
        tableName:'department',
        columnNames:['department_id','department_name'],
        formatOptions:{
            displayColumns:['department_name'],
            callbackName:null
        }
    },
    role_id:{
        tableName:'employee_role',
        columnNames:['role_id','title','salary'],
        formatOptions:{
            displayColumns:['title'],
            callbackName:null
        }
    }
}
module.exports = dbMap