class Department {
    constructor(department_id, department_name){
        department_id = this.id,
        department_name = this.name
    }
    //methods for department
    update(property,value){
        this[property] = value;
    }
    delete(){
        //somehow removes the Department
    }
}