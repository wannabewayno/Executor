// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const options = require('./promptOptions.js');
const autocomplete = require('./autocomplete.js');
const dbMap = require('./dbMap.js');
const fieldMap = require('./fieldMap.js');
const createFormatInput = require('./createFormatInput.js');

//registers the autocomplete prompt type with inquirer
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

//placeholder object to export prompts
const prompts = {};

//creates a prompt
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
    if (type === 'input'){
        prompts[name].filter = choices;
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

//Creates an edit prompt for either Employee, Department or Role.
prompts.edit = type => {
    return makePrompt(`edit${type}`,'list','Choose an Option',[...options.edit(type),...options.menu]);
}

//Dynamically creates a prompt to select an Employee,Department or Role depending on User input.
// sets the 'source' property of this prompt to be a searchable sql query for that input.
prompts.update = type => {
    dbMap[type].formatOptions.callbackName = 'updateField'

     return makePrompt(`update${type}`, 'autocomplete', `Select ${type} to update`,
        autocomplete.searchFromData(dbMap[type])
    );
}

//Dynamically creates a prompt for selecting a field to update. 
prompts.updateField = item => {

    const fields = fieldMap[item.tableName];
    fields.callbackName = 'inputField';

    return makePrompt('chooseField','list','Select a field to update',
        options.fields(fields,item)
    );
}

//dynamically creates a prompt for updating/creating a field from user input
prompts.inputField = item => {
    
    return makePrompt('input','input',`Type in: ${item.readOnly}`,
        createFormatInput(item)
    );
}

//Creates a delete<name> prompt for Employee,Department or Role, depending on User input
// sets the 'source' property of this prompt to be a searchable sql query for that input
prompts.delete = type => {
    dbMap[type].formatOptions.callbackName = 'confirm'

    return makePrompt(`delete${type}`, 'autocomplete', `Select ${type} to DELETE`,
        autocomplete.searchFromData(dbMap[type])
    );
}

prompts.confirm = item => {
   return makePrompt(`confirmDelete`,'list',`Are you sure?`,options.confirm(item));
}


//create employee fields!
//lol some fields!

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu
];

module.exports = prompts;
