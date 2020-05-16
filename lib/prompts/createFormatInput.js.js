const createFormatInput = dataToCache => {
    return formatInput = input => {
        const item = dataToCache;
        item.input = input;
        return {
            function:'update',
            variable:{
                head:null,
                body:item,
            }
        }
    } 
} 

module.exports = createFormatInput;