// Employee class creating new Employee instances
Role = require('./Role.js');

class Employee {
    constructor(id,first_name,last_name,role,manager){
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role = new Role(/* role constructor params*/);
        this.manager = manager;
    }
    //methods
    update(property,value) {
        this[property] = value
    }
    delete() {
        //somehow removes this employee
    }
}

module.exports = Employee;