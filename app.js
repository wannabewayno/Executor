//TODO load up band banner first
const banner = require('./assets/logo/ascii-banner.js');
console.log(banner); 

//TODO possibly, have a separate inquirer session to ask for users sql data base config.
//use that as your configfile
//although, you don't want to ask for that all the time...
//save the config file as a json
//retrieve the config file as a class?
//Show user the config file upon start up as a table with 'password' muted.
//ask the user a confirmation, change the config file or use it?
//you can even have a check to change it anytime within the app.
//and a check to see if they would like to see this screen upon start up again.
//ask user if this looks ok and continue?

//Dependencies
const rxjs = require('rxjs');
const inquirer = require('inquirer');
const prompts = require('./lib/prompts/prompts.js');
//Custom js
const engine = require('./lib/engine.js'); //App logic

//Start fetching data from mySQL display welcome/loading screen
//TODO need to do a sql query and load the first instance of our data upon start up

engine.refresh();

//creates our promptQueue Subject to push prompts into at anytime
const promptQueue = new rxjs.Subject();

//Inquirer prompt module loading in the promptQueue
inquirer.prompt(promptQueue).ui.process.subscribe(async answer => {

        await engine[answer.answer.function](answer.answer.variable);

        //calls the next prompt in the promptQueue
        promptQueue.next(engine.next());
    },
    error => {throw new Error(error)},
    complete => console.log("all done")
)

// kicks off the prompts by calling the first prompt
promptQueue.next(engine.next());
