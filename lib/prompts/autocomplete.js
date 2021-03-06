const fuzzy = require('fuzzy');
const orm = require('../../db/orm/orm.js');

autocomplete = {};

//Returns a function that Takes in user input from inquirer and displays a truncated list matching the input. 
autocomplete.searchFromData = (dbInfo,item) => {

    //returns this search function with appropriate data
    return searchFunction = async (...params) => {

        let [, input,] = params;
        input = input || '';

        //placeholder for our data
        let data;
        // fetches data from the database, returns a promise
        await orm.findAllListFormat(dbInfo,item)
            .then(results=> data = results); //set function data from database results
        
        //if data is an obj map the 'name' key to an array, otherwise, clone incoming array as 'names' to manipulate 
        const names = data.map(obj => {
            if(typeof(obj)==='object'){
                return obj.name;
            } else {
                return obj;
            }
        });

        //match data to user input, then reconstruct the name array with the filtered names
        const fuzzyResult = fuzzy.filter(input, names);
        const filteredNames = fuzzyResult.map(el => el.original);

        //filter original data by referencing our filteredNames names array.
        filteredData = await data.filter(obj => {
            if (typeof(obj)==='object' && filteredNames.indexOf(obj.name)!==-1){
                return obj;
            } else if (typeof(obj)!=='object' && filteredNames.indexOf(obj)!==-1){
                return obj;
            }
        });

        //finally gives filtered data back to the user
        return filteredData;
    }
}

module.exports = autocomplete;