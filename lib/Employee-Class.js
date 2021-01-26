class Employee{
    constructor (name, id, eMail){
        this.name = name;
        this.id = id;
        this.eMail = eMail;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    geteMail(){
        return this.eMail;
    }
    getRole(){
        return "Employee"
    }
}

module.exports = "Employee";