// The Intern class `extends` from Employee, and should have these additional properties/behaviors:

// school
// getSchool()
// getRole() (Overridden to return 'Intern')

const Employee = require("./employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email)
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getPosition() {
        return "Intern";
    }
}

module.exports = Intern;