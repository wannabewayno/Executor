
const makePrompt = (prompts,name,type,message,choices) =>{
    prompts[name] = {
        type:type,
        askAnswered:true,
        name:name,
        message:message,
        prefix: ''
    } 

    if (type === 'list') {
        prompts[name].choices = choices; // displays a list of choices
    }

    if (type === 'autocomplete'){
        prompts[name].pageSize = 6;
        prompts[name].source = choices; // displays a searchable list of choices from a database query
    }

    if (type === 'input'){
        prompts[name].filter = choices; // adds user input to a dataPacket to handle app logic
    }

    return prompts[name];
}

module.exports = makePrompt;