// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const prompts = {};

const mainViewOptions = [
    new inquirer.Separator(),
    { name:'View by employee properties',  value:{function:'viewByProperties'}},
    { name:'View by department',           value:{function:'viewByDepartment'}},
    { name:'View by manager',              value:{function:'viewBy Manager'  }}
];
const propertiesViewOptions = [
    new inquirer.Separator(),
    { name:'View employees by id',           value:{function:'view',variable:'SELECT * FROM employee ORDER BY id DESC'}           },
    { name:'View employees by first name',   value:{function:'view',variable:'SELECT * FROM employee ORDER BY first_name DESC'}   },
    { name:'View employees by last name',    value:{function:'view',variable:'SELECT * FROM employee ORDER BY last_name DESC'}    },
    { name:'View employees by role',         value:{function:'view',variable:'SELECT * FROM employee INNER JOIN employee_role ON employee.role_id = employee_role.role_id ORDER BY salary DESC'}      },
    { name:'View employees by Salary',       value:{function:'view',variable:'SELECT * FROM employee ORDER BY  DESC'}             }
];
const editOptions = [
    new inquirer.Separator()
    ,{
        name:'Edit employees',
        value:{function:'editEmployee'}
    },{
        name:'Edit departments',
        value:{function:'editDepartment'}
    },{
        name:'Search employees',
        value:{function:'search'}
    }
];

const editEmployee = [
    new inquirer.Separator(),
    { name:'update employee details',  value:{function:'update'}},
    new inquirer.Separator(),
    { name:'delete employee',          value:{function:'deleteEmployee'}}
];
const editDepartment = [
    new inquirer.Separator(),

];
const menuOptions             = [
    new inquirer.Separator()
    ,{
        name:'Go back',
        value:{function:'return'}
    }
];

prompts.mainMenu = {
    type:'list',
    askAnswered:true,
    name:'mainMenu',
    message:chalk.green('what would you like to do?'),
    choices:[...mainViewOptions,...editOptions]
}

prompts.viewByProperties = {
    type:'list',
    askAnswered:true,
    name:'viewByProperties',
    message:'what would you like to do?',
    choices:[...propertiesViewOptions,...editOptions,...menuOptions]
}

prompts.editEmployee = {
    type:'list',
    askAnswered:true,
    name:'editEmployee',
    message:'choose a property to edit',
    choices:[...propertiesViewOptions,...editEmployee,...menuOptions]
}

prompts.editDepartment = {
    type:'list',
    askAnswered:true,
    name:'editDepartment',
    message:'choose a property to edit',
    choices:[...propertiesViewOptions,...editDepartment,...menuOptions]
}

//An queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;