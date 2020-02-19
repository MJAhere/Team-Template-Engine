// The Engineer class `extends` from Employee, and should have these additional properties/behaviors:

// github (GitHub username)
// getGithub()
// getRole() (Overridden to return 'Engineer')

const Employee = require("./employee");

class Engineer extends Employee{
    constructor(id, name, email, github) {
        super(id, name, email)
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getPosition() {
        return "Engineer";
    }
}

module.exports = Engineer;