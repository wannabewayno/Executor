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

prompts.editDepartment = {
    type:'list',
    askAnswered:true,
    name:'editDepartment',
    message:'choose a property to edit',
    choices: [...options.editDepartment,...options.menu]
}
//TODO need to add ability to tack on menuOptions into our data! (big job...hnnng)
prompts.editEmployee = {
    type: 'autocomplete',
    name: 'editEmployee',
    message: 'Select employee',
    prefix:'',
    source: autocomplete.searchFromData('employee','first_name','last_name'),
    askAnswered:true,
    pageSize: 6,
}

prompts.viewByDepartment = {
    type: 'autocomplete',
    name: 'editEmployee',
    message: 'Select department',
    prefix:'',
    source: autocomplete.searchFromData('department','department_name'),
    askAnswered:true,
    pageSize: 6,
}

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;
