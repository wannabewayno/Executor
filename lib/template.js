template = {};

template.Employee = {
        next:() => this.index++,
        answers:{},
        index:0,
        structure: [
        { head:'inputField', body:{ readOnly:'First name', columnName:'first_name', callbackOption:{ function:'create', head:null } }                            },
        { head:'inputField', body:{ readOnly:'Last name', columnName:'last_name', callbackOption:{ function:'create', head:null } }                              },
        { head:'select',     body:{ readOnly:'Job title', action:'add', type:'Employee', columnName:'role_id', callbackOption:{ function:'create', head:null } } },
        { head:'select',     body:{ readOnly:'Manager', action:'add', type:'Manager', columnName:'manager_id', callbackOption:{ function:'create', head:null } } },
    ]
}

template.Role = [
    { head:'inputField', body:{ readOnly:'Job title', columnName:'title' } },
    { head:'inputField', body:{ readOnly:'Salary', columnName:'salary' }  },
    { head:'select',     body:{ readOnly:'Department', action:'add', type:'Department', columnName:'department_id' } }

];

template.department = [
    { head:'inputField', body:{ readOnly:'Department Name', columnName:'department_name' } },
];


module.exports = template; 