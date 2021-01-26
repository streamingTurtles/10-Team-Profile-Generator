const Employee = require("./Employee-Class");

class Engineer extends Employee {
    constructor (name, id, eMail, gitHub) {
        super(name, id, eMail);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;