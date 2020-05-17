// callback functions from the prompt module. This is the app logic.
const chalk = require('chalk');
const prompts = require('./prompts/prompts');
const orm = require('../db/orm/orm');

//Global Variable, tracks where in the prompt queue the user is.
let queueIndex  = 0;

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
engine.viewBy    = dataPacket => {
    const queryObj = dataPacket.body; 

    orm.findAllGroupBy(queryObj)
    .then(results => engine.refresh(results))

    engine.stay();
};

engine.viewByDepartment = () => {
    engine.viewBy({body:['department_name','salary']})
    prompts.viewByDepartment();
    engine.queue('departmentView');
}

//logs the current database instance to the screen
engine.refresh = data => {
    console.log(`\n`);
    console.table(data)
};

// a switch that queues follow up prompts from the selected user input
engine.switch  = dataPacket => {
    let { head, body } = dataPacket;

    if( body !== null ){
        //creates a dynamic prompt by pointing to prompts[head] using data passed by the body
        const createdPrompt = prompts[head](body);
       
        //gets the name of the created prompt so we can queue it.
        head = createdPrompt.name;
    }
    engine.queue(head)
}

engine.create  = () => {
    
};

engine.update  = dataPacket => {
    const { body } = dataPacket;
    orm.Update(body)

    console.log(chalk.redBright(`Updated ${body.readOnly} Successfully`));
    engine.queue('mainMenu');
};

//sends the id of the item to the orm.Delete method, then returns user to main menu.
engine.delete  = dataPacket => {
    const { body } = dataPacket 
    orm.Delete(body);

    console.log(chalk.redBright(`Deleted ${body.name} Successfully`));
    engine.queue('mainMenu');
};

module.exports = engine;