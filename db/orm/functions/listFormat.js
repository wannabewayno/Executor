//returns an sql query formated as an inquirer choice array that links to a callback for that choice
const listFormat = (dbResult,formatOptions) => {

    const { displayColumns, valueColumns, callbackName } = formatOptions

    const choices = dbResult.map(rowObj => {
        const name = displayColumns.map(key => rowObj[key]).join(' ')
        rowObj.name = name;
        return {
            name: name,
            value:{
                function:callbackName,
                variable:rowObj
            }
        }
    });

    return choices;
}

module.exports = listFormat;