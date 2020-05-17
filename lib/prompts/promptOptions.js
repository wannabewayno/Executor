const inquirer = require('inquirer'); 

// ======= boilerPlate options for prompts ========
const options = {};

options.mainView = [
    new inquirer.Separator(),
    { name:'View by employee properties',  value:{ function:'switch',           variable:{ head:'viewByProperties', body:null } }    },
    { name:'View by department',           value:{ function:'viewByDepartment', variable:{ head:null, body:null }               }    },
    { name:'View by manager',              value:{ function:'switch',           variable:{ head:'viewByManager',    body:null } }    }
];

options.propertiesView = [
    new inquirer.Separator(),
    { name:'List all employees by Id',           value:{ function:'viewBy',variable:{ head: null, body:['id'] }                       }   },
    { name:'List all employees by First name',   value:{ function:'viewBy',variable:{ head: null, body:['first_name','last_name'] }   }   },
    { name:'List all employees by Last name',    value:{ function:'viewBy',variable:{ head: null, body:['last_name','first_name'] }   }   },
    { name:'List all employees by Job title',    value:{ function:'viewBy',variable:{ head: null, body:['title','department_name'] }  }   },
    { name:'List all employees by Salary',       value:{ function:'viewBy',variable:{ head: null, body:['salary','department_name'] } }   },
    { name:'List all employees by Department',   value:{ function:'viewBy',variable:{ head: null, body:['department_name','salary'] } }   },
    { name:'List all employees by Manager',      value:{ function:'viewBy',variable:{ head: null, body:['manager','salary'] }         }   }
];

options.editType = [
    new inquirer.Separator(),
    { name:'Edit employees',    value:{ function:'switch', variable:{ head: 'edit', body:'Employee' }   }    },
    { name:'Edit departments',  value:{ function:'switch', variable:{ head: 'edit', body:'Department' } }    },
    { name:'Edit roles',        value:{ function:'switch', variable:{ head: 'edit', body:'Role' }       }    }
];

options.edit = dataName => { 
    return [
        new inquirer.Separator(),
        { name:`Update exisitng ${dataName}`, value:{ function:'switch', variable:{ head:`select`,      body:{  type:`${dataName}`, action:'update', callbackName:'updateField' } } }    },
        { name:`Create a new ${dataName}`,    value:{ function:'create', variable:{ head:`${dataName}`, body:null } }                                                                    },
        { name:`Delete ${dataName}`,          value:{ function:'switch', variable:{ head:`select`,      body:{  type:`${dataName}`, action:'DELETE', callbackName:'confirm' } }     }    }
    ];
}

options.menu             = [
    new inquirer.Separator()
    ,{
        name:'Go back',
        value:{function:'return'}
    }
];

options.confirm = item => {
    return [
        { name:`YES, DELETE ${item.name}?`, value:{ function:'delete', variable:{ head:null ,       body:item } }   },
        { name:`NO, now I don't want to`,   value:{ function:'switch', variable:{ head:'mainMenu' , body:null } }   },
    ];
}

options.fields = (fields,item) => {

    const { callbackName, choices } = fields

    return choices.map(choice => {

        //creating multiple instances of the item Object requires cloning.
        itemClone = JSON.parse(JSON.stringify(item)); //Object.assign({},item), didn't work, error regarding strict mode not being accessed by inquirer
        const name = choice.readOnly;

        //these fields are needed to perfom an update query. We save them with our item.
        itemClone.columnName = choice.columnName;
        itemClone.readOnly = name;

        return{
            name:name,
            value:{
                function:'switch',
                variable:{ head:callbackName, body:itemClone }
            }
        }
    });
}

module.exports = options;