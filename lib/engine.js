// callback functions from the prompt module. This is the app logic.
const chalk = require('chalk');
const prompts = require('./prompts.js');
const SQL = require('../db/dbInterface.js');

//Global Variable, tracks where in the prompt queue the user is.
let queueIndex  = 0; 

const engine = {};
engine.queueIndex = queueIndex;
//Loads the next prompt in the queue to the UI 
engine.next             = () => { 
    queueIndex++;
    return prompts.queue[queueIndex-1];
} 
// adds a prompt to the end of the queue
engine.queue            = prompt => prompts.queue.push(prompts[prompt])

//re-queues the previous prompt
engine.return           = type => {
    const currentPrompt = prompts.queue[queueIndex-1].name;
    const previousPrompt = prompts.queue[queueIndex-2].name;
    engine.queue(previousPrompt);
}

//Updates and displays the database instance to the user, with the result of a SELECT query 
engine.view             = query => {
    //a SELECT query to MySQL, returns a promise with the result of the query
    SQL.query(query)
    //pass the result query to the refresh function
    //TODO pass through to a dataparser to instatiante create,update,delete methods for data instances
    .then(results => engine.refresh(results))
    //returns the user to the previous screen
    engine.return('stay');
};

//queues confirmation prompt, checks for user input to exceute given callback
engine.confirm          = () => {
    //TODO write confirmation function here
    // it will queue a confirmation question that will call itself, this time with a boolean variable
    // so first pass, if variable is undefinded or something, queues confirmation questions
    // second pass, response from confirmation questions with user boolean.
        // if true, execute a callback return to previous prompt before confirmation was called.
        // if false, simply return to previous prompt before confirmation was called.
}

//logs the current database instance to the screen
engine.refresh          = data => {
    //will console.log the database instance
    console.table(data)
};

// a switch that queues follow up prompts from the selected user input
engine.switch           = promptName => {
    engine.queue(promptName);  
};

module.exports = engine;