// maps editable columnNames from a given table  to readable choices a user can select from

fieldMap = {
    employee:{
        choices:[
            { readOnly:'First name',columnName:'first_name'},
            { readOnly:'Last name',columnName:'last_name'},
            { readOnly:'Job title',columnName:'title'},
            { readOnly:'Manager',columnName:'manager'}
        ],
        callbackName:null
    },
    department:{
        choices:[
            { readOnly:'Department name',columnName:'department_name'}
        ],
        callbackName:null,
    },
    employee_role:{
        choices:[
            { readOnly:'Job title',columnName:'title'},
            { readOnly:'Salary',columnName:'salary'},
            { readOnly:'Department',columnName:'department'}
        ],
        callbackName:null
    }
}

module.exports = fieldMap;