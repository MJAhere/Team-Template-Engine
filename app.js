const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");

const team = [];

class teamViewer {
    confirmManager() {
        inquirer
            .prompt([
                {
                    type: "confirm"
                    , message: "Are you the manager?"
                    , name: "managerConfirm"
                }
            ]).then(res => {
                if (res.managerConfirm) {
                    this.createManager()
                } else {
                    console.log("Sorry, only managers can construct a team")
                    process.exit(0);
                }
            })
    };

    createManager() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "Please enter your name"
                    , name: "managerName"
                },
                {
                    type: "input"
                    , message: "Please enter your manager ID number"
                    , name: "managerIDNum"
                },
                {
                    type: "input"
                    , message: "Please enter your office phone number"
                    , name: "managerPhone"
                },
                {
                    type: "input"
                    , message: "Please enter your email address"
                    , name: "managerEmail"
                },
            ]).then(res => {
                const manager = new Manager(res.managerName, res.managerIDNum, res.managerEmail, res.managerPhone);
                team.push(manager);
                this.createTeam();
            });
    };

    createTeam() {
        inquirer
            .prompt([
                {
                    type: "list"
                    , message: "Would you like more team members, or are you finished?"
                    , choices: ["Engineer", "Intern", "My team is complete"]
                    , name: "employeeType"
                }
            ]).then(res => {
                if (res.employeeType === "Engineer") {
                    this.createEngineer();
                } else if (res.employeeType === "Intern") {
                    this.createIntern();
                } else {
                    fs.writeFile(outputPath, render(team), err => {
                        if (err) throw err;
                        console.log("EUREKA!")
                    })

                }
            });
    };

    createEngineer() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "Please type the engineer's name"
                    , name: "engineerName"
                },
                {
                    type: "input"
                    , message: "Please enter the engineer's ID number"
                    , name: "engineerIDNum"
                },
                {
                    type: "input"
                    , message: "Please enter the engineer's GitHub"
                    , name: "engineerPhone"
                },
                {
                    type: "input"
                    , message: "Please enter engineer's email"
                    , name: "engineerEmail"
                },
            ]).then(res => {
                const engineer = new Engineer(res.engineerName, res.engineerIDNum, res.engineerEmail, res.engineerPhone);
                team.push(engineer);
                this.createTeam();
            });
    };

    createIntern() {
        inquirer
            .prompt([
                {
                    type: "input"
                    , message: "Please enter the intern's name"
                    , name: "internName"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's ID number"
                    , name: "internIDNum"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's school name"
                    , name: "internSchool"
                },
                {
                    type: "input"
                    , message: "Please enter the intern's email address"
                    , name: "internEmail"
                },
            ]).then(res => {
                const intern = new Intern(res.internName, res.internIDNum, res.internEmail, res.internSchool);
                team.push(intern);
                this.createTeam();
            });
    }


}

const viewTeam = new teamViewer();

viewTeam.confirmManager();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

