//Dependencies
const rxjs = require('rxjs');
const inquirer = require('inquirer');
//Custom js
const engine = require('./lib/engine.js'); //App logic

//Start fetching data from mySQL display welcome/loading screen
console.log('Executor loaidng screen');
engine.refresh();

const promptQueue = new rxjs.Subject();

inquirer.prompt(promptQueue).ui.process.subscribe(async answer => {

    await engine[answer.answer]();
    await engine.refresh();
    promptQueue.next(engine.next());

},
error => {throw new Error(error)},
complete => console.log("all done")
)

// kicks off the prompts
promptQueue.next(engine.next());

// console.log(chalk.blue(chalk.bgCyanBright('hello world')));