// Prompts to be presented to the user
const chalk = require('chalk');
const inquirer = require('inquirer');
const options = require('./promptOptions.js');
const autocomplete = require('./autocomplete.js');
const dbMap = require('./dbMap.js');
const fieldMap = require('./fieldMap.js');
const createFormatInput = require('./createFormatInput.js');
const makePrompt = require('./makePrompt.js');

//registers the autocomplete prompt type with inquirer
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));

//placeholder object to export prompts
const prompts = {};

// ================== Prompts =====================

prompts.mainMenu = {
    type:'list',
    askAnswered:true,
    name:'mainMenu',
    message:chalk.green('what would you like to do?'),
    choices:[...options.view,...options.editType],
    pageSize:9
}

prompts.viewByProperties = {
    type:'list',
    askAnswered:true,
    name:'viewByProperties',
    message:chalk.green('what would you like to do?'),
    choices:[...options.propertiesView/*,...options.editType*/,...options.menu],
    pageSize:9
}

//Creates an edit prompt for either Employee, Department or Role.
prompts.edit = type => {
    return makePrompt(prompts,`edit${type}`,'list','Choose an Option',[...options.edit(type),...options.menu]);
}

// Dynamically creates a prompt to select an Employee,Department or Role depending on User input.
// Sets the 'source' property of this prompt to be a searchable sql query for that input.
// Defines call back to send the selection to the appropriate engine logic
prompts.select = dataPacket => {
    const { type, callbackOption, action, item } = dataPacket;
   
    dbMap[type].formatOptions.callbackOption = callbackOption;
    
     return makePrompt(prompts,`select${type}`, 'autocomplete', `Select ${type} to ${action}`,
        autocomplete.searchFromData(dbMap[type],item)
    );
}

//Dynamically creates a prompt for selecting a field to update. 
prompts.updateField = item => {
    
    const fields = fieldMap[item.tableName];
    fields.callbackOption = {function:'switch', head:'inputField'};

    return makePrompt(prompts,'chooseField','list','Select a field to update',
        options.fields(fields,item)
    );
}

//Dynamically creates a prompt for updating/creating a field from user input
prompts.inputField = item => {
    const { tableName, columnName } = item;
    
    item.needsInput = true;
    //special cases where you have to select from existing data.
    if ( tableName === 'employee' && columnName === 'title' ) {
        return prompts.select({type:'Role', callbackOption:{ function:'update', head:null }, action:'update',item:item})
    }
    if ( tableName === 'emloyee' && columnName === 'manager' ) {
        return prompts.select({type:'Manager', callbackOption:{ function:'update', head:null }, action:'update', item:item}) //Only from the department the employee is in?
    }
    if ( tableName === 'emloyee_role' && columnName === 'department_name' ) {
        return prompts.select({type:'Department', callbackOption:{ function:'update', head:null }, action:'update',item:item})
    }
    //otherwise, create a free-form input
    return makePrompt(prompts,'input','input',`Type in: ${item.readOnly}`,
        createFormatInput(item)
    );
    
}

prompts.confirm = item => {
   return makePrompt(prompts,`confirmDelete`,'list',`Are you sure?`,options.confirm(item));
}

//A queue of prompts to be asked
prompts.queue = [
    prompts.mainMenu // This is here on app start up, must have at least one prompt!!
];

module.exports = prompts;
