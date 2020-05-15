// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const SQL = require('../../db/dbInterface.js');
const options = require('./promptOptions.js');
const orm = require('../../db/orm.js')
const autocomplete = require('./autocomplete.js');

//registers the autocompelte prompt type with inquirer
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

//placeholder object to export prompts
const prompts = {};

//creates a prompt and add
const makePrompt = (name,type,message,choices) =>{
    prompts[name] = {
        type:type,
        askAnswered:true,
        name:name,
        message:message,
        prefix: ''
    } 
    if (type === 'list') {
        prompts[name].choices = choices; 
    }
    if (type === 'autocomplete'){
        prompts[name].pageSize = 6;
        prompts[name].source = choices;
    }
    return prompts[name];
}

// ======== Prompts ========

prompts.mainMenu = {
    type:'list',
    askAnswered:true,
    name:'mainMenu',
    message:chalk.green('what would you like to do?'),
    choices:[...options.mainView,...options.editType]
}

prompts.viewByProperties = {
    type:'list',
    askAnswered:true,
    name:'viewByProperties',
    message:'what would you like to do?',
    choices:[...options.propertiesView,...options.editType,...options.menu]
}

prompts.edit = name => {
    makePrompt(`edit${name}`,'list','Choose an Option',[...options.edit(name),...options.menu]);
}

prompts.select = name => {
    makePrompt(`select${name}`,'autocomplete',`Select ${name}`,autocomplete.searchFromData('employee','first_name','last_name'));
}

prompts.delete = name => {
    makePrompt(`delete${name}`,'autocomplete',`Select ${name}`,autocomplete.searchFromData('employee','first_name','last_name'));
}

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;
