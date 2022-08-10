// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = require('./src/generateHTML');

// link to team profiles
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern =  require('./lib/Intern');
const Employee = require('./lib/Employee');

// Create an empty array list to store employee objects
const teamArray = [];
//  Gather manager data
const managerData = () => {
    // inquirer.prompt()
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the first and last name of the manager.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please enter employee ID number.");
                    return false;
                }
            }
        }, 
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?",
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log ("Please enter manager's office number.");
                    return false;
                }
            }
        }
     // THEN Build a Manager object
    ])
    .then(managerInput =>{
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    }) 
}
  
// Gather Engineer and Intern data
const employeeData = () => {
    console.log(`Adding employees to the team`);
    // inquirer.prompt()
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What role does this employee have?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the first and last name of the employee.");
                    return false;
                }
        }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID number?",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ("Please enter employee ID number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ("Please enter employee's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's GitHub username?",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ("Please enter employee's GitHub username.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log("Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmEmployee',
            message: "Would you like to add more team members?",
            default: false
        }
    ])
    // Employee object
    .then(employeeInput => {
        let { name, id, email, role, github, school, confirmEmployee } = employeeInput;
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        
        teamArray.push(employee);

        if (confirmEmployee) {
            return employeeData(teamArray);
        } else {
            return teamArray;
        }
    })
}


// Ask for which team member they want to add or "are they done"

    // inquirer.prompt()

    // THEN deciding which function to call 

// Generate the HTML and write it to a file
const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("You have successfully built your team!")
        }
    })
};


managerData()
    .then(employeeData)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    }) 
    .catch((err)=>{
    console.log(err);
    });