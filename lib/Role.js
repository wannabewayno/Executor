Department = require('./Department.js');
class Role {
    constructor(role_id,title,salary,department){
        this.id = role_id;
        this.title = title;
        this.salary = salary;
        this.department = new Department(/* Department constructor params */)
    }
    //methods for role
    update(property,value){
        this[property] = value;
        //then add to database;
        //or add to db then refresh and pull it back in as a new object?
    }
    delete(){
        //it can't delete itself can it?
        //maybe have a method on a database object instead. that can create and delete stuff.
    }
}