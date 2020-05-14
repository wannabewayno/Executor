// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const SQL = require('../db/dbInterface.js');
const options = require('./promptOptions.js');
const orm = require('./../db/orm.js')
const autocomplete = require('./autocomplete.js');

const static = ['item1','item2','item3','item4'];
const dynamic = [{name:'item1',value:{function:'switch',variable:'mainMenu'}},{name:'item2',value:{function:'switch',variable:'mainMenu'}},{name:'item3',value:{function:'switch',variable:'mainMenu'}},{name:'item4',value:{function:'switch',variable:'mainMenu'}}];

//registers the autocompelte module
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

//placeholder object to export prompts
const prompts = {};

// ======== Prompts ========
prompts.mainMenu = {
    type:'list',
    askAnswered:true,
    name:'mainMenu',
    message:chalk.green('what would you like to do?'),
    choices:[...options.mainView,...options.edit]
}

prompts.viewByProperties = {
    type:'list',
    askAnswered:true,
    name:'viewByProperties',
    message:'what would you like to do?',
    choices:[...options.propertiesView,...options.edit,...options.menu]
}

prompts.viewByDepartment = {
    type:'list',
    askAnswered:true,
    name:'viewByDepartment',
    message:'Pick a department to view',
    choices: function () {
       const done = this.async();
       SQL.query('SELECT department_name FROM department')
       .then(results =>{
            const departmentArray = []; 
            const departmentList = orm.listFormat(results,'department_name')
            departmentArray.push(new inquirer.Separator(),...departmentList,...options.menu);
            done(null,departmentArray);
       });
    }
}

// prompts.editEmployee = {
//     type:'list',
//     askAnswered:true,
//     name:'editEmployee',
//     message:'choose a property to edit',
//     choices:function () {
//         const done = this.async();
//         SQL.query('SELECT first_name,last_name FROM employee')
//         .then(results =>{
//              const employeeArray = []; 
//              const employeeList = orm.listFormat(results,'first_name','last_name');
//              employeeArray.push(new inquirer.Separator(),...employeeList,...options.menu);
//              done(null,employeeArray);
//         });
//     }
// }

prompts.editDepartment = {
    type:'list',
    askAnswered:true,
    name:'editDepartment',
    message:'choose a property to edit',
    choices: [...options.editDepartment,...options.menu]
}

prompts.autocomplete = () => {
    return {
    type: 'autocomplete',
    name: 'autocomplete',
    message: 'Choose an employee from the list',
    source: autocomplete.searchFromData('employee','first_name','last_name'),
    askAnswered:true,
    pageSize: 6,
  }
}

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;
