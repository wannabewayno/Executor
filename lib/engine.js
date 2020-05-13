// callback functions from the prompt module. This is the app logic.
const chalk = require('chalk');
const prompts = require('./prompts.js');
const SQL = require('../db/database.js');

//Global Variable;
let queueIndex  = 0; 

const engine = {};

engine.next             = () => { 
    queueIndex++; 
    return prompts.queue[queueIndex-1];
} 
engine.create           = () => {};
engine.update           = () => {};
engine.delete           = () => {};
engine.buildPrompt      = () => {};
engine.queue            = prompt => prompts.queue.push(prompts[prompt])

//re-queues the previous prompt
engine.return           = () => {
    const previousPrompt = prompts.queue[queueIndex-2].name;
    engine.queue(previousPrompt);
};

//uses methods in database.js to perform SQL queries to the employee schema
engine.query            = () => {
    query('SELECT * FROM employee WHERE id = 3')
    .then(results => console.log(results))
    engine.return();
};
//Updates and displays the database instance to the user, with the result of a SELECT query 
engine.view             = query => {
    //a SELECT query to MySQL, returns a promise with the result of the query
    SQL.query(query)
    //pass the result query to the refresh function
    .then(results => {console.log(results); engine.refresh(results)})
    //returns the user to the previous screen
    engine.return();
};

//logs the current database instance to the screen
engine.refresh          = data => {
    //will console.log the database instance
    console.log(chalk.red(data))
}
engine.editEmployee     = () => {
    engine.queue('editEmployee');
};

engine.editDepartment  = () => {
    engine.queue('editDepartment')
};

engine.viewByProperties = () => {
    //clg database instance
    engine.queue('viewByProperties');
};


module.exports = engine;