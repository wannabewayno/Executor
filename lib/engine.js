// callback functions from the prompt module. This is the app logic.
const chalk = require('chalk');
const prompts = require('./prompts/prompts');
const orm = require('../db/orm/orm');
const Cache = require('./Cache');

//Global Variable, tracks where in the prompt queue the user is.
let queueIndex  = 0;

//A cache object, allows storage of temp data within the app.
const cache =  new Cache(); 

//creates a placeholder to export engine functions to app.js
const engine = {};

//Loads the next prompt in the queue to the UI 
engine.next             = () => {
    queueIndex++;
    return prompts.queue[queueIndex-1];
} 

// adds a prompt to the end of the queue
engine.queue   = promptName => prompts.queue.push(prompts[promptName]);

//re-queues the previous prompt
engine.return  = () => engine.queue(prompts.queue[queueIndex-2].name);

//rolls back the queueIndex by 1, keeping the user at the same prompt when engine.next() is called
engine.stay    = () => queueIndex--;
    
//Updates and displays the database instance to the user, with the result of a SELECT query 
engine.view    = queryObj => {
    
    orm.findAll(queryObj)

    //pass the result query to the refresh function
    .then(results => engine.refresh(results))

    //returns the user to the previous screen
    engine.stay();
};

//queues confirmation prompt, checks for user input to execute given callback
engine.confirm = item => {
    // we need to construct the confirm query with the item to confirm
    prompts.confirm(item);
    // then we load this into our queue
    engine.queue('confirmDelete')
};

//logs the current database instance to the screen
engine.refresh = data => {
    //will console.log the database instance
    console.table(data)
};

// a switch that queues follow up prompts from the selected user input
engine.switch  = promptName => {

    //if a promptName contains a '|' character, we are storing two sets of information here as a string
    // -> functionName|variable
    if(promptName.indexOf('|')!==-1){

        //So we split the promptName by '|', and extract this information
        const [functionName,variable] = promptName.split('|');

        //This creates a dynamic Prompt
        prompts[functionName](variable);

        //under this name
        promptName = [functionName,variable].join('');
    }

    //We now queue the prompt associated with promptName 
    engine.queue(promptName);  
};

engine.create  = () => {
    //pushes questions to the user, will need to store this somewhere
    //then send this object to the ORM.create method
    //queue the main menu?
    //call a  view method
};
engine.update  = item => {
    //this item contains the name and id of the thing to update.
    //need to present user with a menu 
    //we need to push questions to the use
};

//sends the id of the item to the orm.delete method, then returns user to main menu.
engine.delete  = item => {
    orm.Delete(item);
    console.log(chalk.red(`DELETED ${item.name} Successfully`));
    engine.queue('mainMenu');
};

module.exports = engine;