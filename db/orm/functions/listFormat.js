//returns an sql query formated as an inquirer choice array that links to a callback for that choice
const listFormat = (dbResult,formatOptions,item) => {

    const { displayColumns, callbackOption } = formatOptions

    const choices = dbResult.map(rowObj => {
        const name = displayColumns.map(key => rowObj[key]).join(' ')
        rowObj.name = name;
        //if we have passed data
        let output;
        if (item === undefined){
            output = rowObj
        } else if (item.needsInput){
            itemClone = JSON.parse(JSON.stringify(item));
            itemClone.input = rowObj[item.columnName];
            output = itemClone;
        }

        return {
            name: name,
            value:{
                function:callbackOption.function,
                variable:{ head:callbackOption.head, body:output }
            }
        }
    });

    return choices;
}

module.exports = listFormat;