const extractId = queryObj => {

    let id = Object.keys(queryObj).filter(key => {
        if (key.indexOf('id') !== -1 ){
            return key;
        }
    });

    id = {
        name:id[0],
        value:queryObj[id[0]]
    } 

    return id;
}

module.exports = extractId;