const inquirer = require('inquirer');
// ======= boilerPlate options for prompts ========
const options = {};

options.mainView = [
    new inquirer.Separator(),
    { name:'View by employee properties',  value:{function:'switch',    variable:'viewByProperties'}},
    { name:'View by department',           value:{function:'switch',    variable:'viewByDepartment'}},
    { name:'View by manager',              value:{function:'switch',    variable:'viewByManager'   }}
];

options.propertiesView = [
    new inquirer.Separator(),
    { name:'View employees by id',           value:{function:'view',variable:{tableName:'employee',columnNames:[]}}   },
    { name:'View employees by first name',   value:{function:'view',variable:{tableName:'employee',columnNames:[]}}   },
    { name:'View employees by last name',    value:{function:'view',variable:{tableName:'employee',columnNames:[]}}   },
    { name:'View employees by role',         value:{function:'view',variable:{tableName:'employee',columnNames:[]}}   },
    { name:'View employees by Salary',       value:{function:'view',variable:{tableName:'employee',columnNames:[]}}   }
];

options.editType = [
    new inquirer.Separator(),
    { name:'Edit employees',    value:{function:'switch', variable:'edit|Employee'}},
    { name:'Edit departments',  value:{function:'switch', variable:'edit|Department'}},
    { name:'Edit roles',        value:{function:'switch', variable:'edit|Role'}},
];

options.edit = dataName => { 
    return [
        new inquirer.Separator(),
        { name:`Update exisitng ${dataName}`, value:{function:'switch', variable:`update|${dataName}`} },
        { name:`Create a new ${dataName}`,    value:{function:'create', variable:`${dataName}`} },
        { name:`Delete ${dataName}`,          value:{function:'switch', variable:`delete|${dataName}`} }
    ];
}

options.menu             = [
    new inquirer.Separator()
    ,{
        name:'Go back',
        value:{function:'return'}
    }
];

options.confirm = item => {
    return [
        { name:`YES, DELETE ${item.name}?`, value:{function:'delete', variable:item}        },
        { name:`NO, now I don't want to`,   value:{function:'switch', variable:'mainMenu'}  },
    ];
}

module.exports = options;