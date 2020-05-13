// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const prompts = {};

const mainViewOptions = [
    new inquirer.Separator(),
    { name:'View by employee properties',  value:{function:'switch',    variable:'viewByProperties'}},
    { name:'View by department',           value:{function:'switch',    variable:'viewByDepartment'}},
    { name:'View by manager',              value:{function:'switch',    variable:'viewByManager'  }}
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
    new inquirer.Separator(),
    { name:'Edit employees',    value:{function:'switch', variable:'editEmployee'}},
    { name:'Edit departments',  value:{function:'switch', variable:'editDepartment'}},
    { name:'Search employees',  value:{function:'switch', variable:'searchEmployee'}}
];

const editEmployee = [
    new inquirer.Separator(),
    { name:'update employee details',  value:{function:'update'}},
    new inquirer.Separator(),
    { name:'delete employee',          value:{function:'deleteEmployee'}}
];
const editDepartment = [
    new inquirer.Separator(),
    { name:'Update department name',    value:{ function:'department', variable:'update'}},
    { name:'Delete department',         value:{ function:'department', variable:'delete'}},
];
const menuOptions             = [
    new inquirer.Separator()
    ,{
        name:'Go back',
        value:{function:'return'}
    }
];

prompts.mainMenu = {
    prompt:{
        type:'list',
        askAnswered:true,
        name:'mainMenu',
        message:chalk.green('what would you like to do?'),
        choices:[...mainViewOptions,...editOptions]
    },
    returnable:true,
}

prompts.viewByProperties = {
    prompt:{
        type:'list',
        askAnswered:true,
        name:'viewByProperties',
        message:'what would you like to do?',
        choices:[...propertiesViewOptions,...editOptions,...menuOptions]
        },
    returnable:true
}

prompts.editEmployee = {
    prompt:{
        type:'list',
        askAnswered:true,
        name:'editEmployee',
        message:'choose a property to edit',
        choices:[...propertiesViewOptions,...editEmployee,...menuOptions]
    },
    returnable:true
   
}

prompts.editDepartment = {
    prompt:{
        type:'list',
        askAnswered:true,
        name:'editDepartment',
        message:'choose a property to edit',
        choices:[...propertiesViewOptions,...editDepartment,...menuOptions]
    },
    returnable:true
}
prompts.searchEmployee = {
    prompt:{
        type:'list',
        askAnswered:true,
        name:'searchEmployee',
        message:'type in an employee name or pick from the list',
        chocies:['some choices will appear here at some point']
    },
    returnable:true
}

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;