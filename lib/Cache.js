//a cache object for storing temporay data with in the app
class Cache {
    constructor(){
        this.temp = {};
    }

    //stores data under a key
    store(key,data) {
        this.temp[key] = data
    }

    //retrieves data from a key
    retrieve(key) {
        return this.temp[key]
    }
    // first line
    // second line
    // third line
    // Bad commit
    // code to fix bad commit
    // fourth line
    //clears the selected key or clears the entire cache
    clear(key){
        if (key) {
            delete this.temp[key];
        } else {
            this.temp = {};
        }
    }
}

module.exports = Cache;