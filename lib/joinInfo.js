joinTable = {
    Employee:{ tableName:'employee', joinTable:null },
    Department:{ tableName:'department', joinTable:null },
    Role:{ tableName:'employee_role', joinTable:{ tableName:'department', key:'department_id' } }
}

module.exports = joinTable;