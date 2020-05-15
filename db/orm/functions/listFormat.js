//returns an sql query formated as an inquirer choice array that links to a callback for that choice
const listFormat = (dbResult,formatOptions) => {

    const { displayColumns, valueColumns, callbackName } = formatOptions

    const choices = dbResult.map(rowObj => {

        return {
            name: displayColumns.map(key => rowObj[key]).join(' '),
            value:{
                function:callbackName,
                variable:rowObj
            }
        }
    });

    return choices;
}

module.exports = listFormat;