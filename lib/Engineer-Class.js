const Employee = require("./Employee-Class");

class Engineer extends Employee {
    constructor (name, id, eMail, gitHub) {
        super(name, id, eMail);
        this.github = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;