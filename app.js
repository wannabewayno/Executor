//Dependencies
const rxjs = require('rxjs');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts.js');
//Custom js
const engine = require('./lib/engine.js'); //App logic

//Start fetching data from mySQL display welcome/loading screen
console.log('Executor loading screen');
engine.refresh();

const promptQueue = new rxjs.Subject();

inquirer.prompt(promptQueue).ui.process.subscribe(async answer => {

    await engine[answer.answer.function](answer.answer.variable);
    
    promptQueue.next(engine.next());
},
error => {throw new Error(error)},
complete => console.log("all done")
)

// kicks off the prompts
promptQueue.next(engine.next());
