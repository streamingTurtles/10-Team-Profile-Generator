const Employee = require("./Employee-Class");

class Manager extends Employee{
    constructor(name, id, eMail, officeNumber){
        super(name, id, eMail);
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;