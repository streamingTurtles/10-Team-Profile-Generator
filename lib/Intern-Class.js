const Employee = require("./Employee-Class");

class Intern extends Employee {
    constructor (name, id, eMail, school){
        super(name, id, eMail, school);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;