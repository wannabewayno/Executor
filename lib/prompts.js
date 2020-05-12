// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const prompts = {};

const mainViewOptions = [
    new inquirer.Separator()
    ,{ name:'View by employee properties',  value:'viewByProperties'}
    ,{ name:'View by department',           value:'viewByDepartment'}
    ,{ name:'View by manager',              value:'viewBy Manager' }
];
const propertiesViewOptions = [
    new inquirer.Separator()
    ,{ name:'View by id',           value:'viewById'}
    ,{ name:'View by first name',   value:'viewByFirstName'}
    ,{ name:'View by last name',    value:'viewByLastName'}
    ,{ name:'View by role',         value:'viewByRole'}
    ,{ name:'View by Salary',       value:'viewBySalary'}
];
const editOptions = [
    new inquirer.Separator()
    ,{
        name:'Edit employees',
        value:'editEmployees'
    },{
        name:'Edit departments',
        value:'editDepartments'
    },{
        name:'Search employees',
        value:'search'
    }
];

const editEmployee = [
    new inquirer.Separator()
    ,{ name:'update employee details',  value:'update'}
    ,new inquirer.Separator()
    ,{ name:'delete employee',          value:'deleteEmployee'}
];
const editDepartment = [

];
const menuOptions             = [
    new inquirer.Separator()
    ,{
        name:'Go back',
        value:'return'
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