// callback functions from the prompt module. This is the app logic.
const chalk = require('chalk');
const prompts = require('./prompts.js');
const sql = require('../db/database.js');

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
engine.query            = () => {};
engine.buildPrompt      = () => {};
engine.queue            = prompt => prompts.queue.push(prompts[prompt])

engine.return           = () => {
    const previousPrompt = prompts.queue[queueIndex-2].name;
    engine.queue(previousPrompt);
};
//logs the current database instance to the screen
engine.refresh          = () => {
    //will console.log the database instance
    console.log(chalk.red('* a view with all employees from A-Z* \n-\n-\n-\n-\n-\n-\n-\n-\n-\n-\n-'))
}

engine.updateMenu       = () => console.log(`HITTING: UPDATE MENU`);
engine.viewByProperties = () => {
    //clg database instance
    engine.queue('viewByProperties');
};


module.exports = engine;