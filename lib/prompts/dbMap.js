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
        columnNames:['id','department_name'],
        formatOptions:{
            displayColumns:['department_name'],
            valueColumns:['id','first_name','last_name'],
            callbackName:null
        }
    },
    Role:{
        tableName:'employee_role',
        columnNames:['id','title','salary'],
        formatOptions:{
            displayColumns:['title'],
            valueColumns:['id','title','salary'],
            callbackName:null
        }
    }
}
module.exports = dbMap