// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// link to team profiles
const Engineer = require('./lib/Engineer');
const Manager = require("./lib/Manager");
const Intern =  require("./lib/Intern");



// Create an empty array list to store employee objects
const teamArray = [];
//  Gather manager data
const managerData = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
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
            name: 'managerId',
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
            name: 'managerEmail',
            message: "What is the manager's email address?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ("Please enter manager's email.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOffice',
            message: "What is the manager's office number?",
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log ("Please enter manager's office number.");
                    return false;
                }
            }
        }
     // THEN Build a Manager object
    ])
    .then(answers => {
        const { managerName, managerId, managerEmail, managerOffice } = answers;
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOffice);

        teamArray.push(manager);
        console.log(manager);
    });
}
  

  

// Gather Engineer data

    // inquirer.prompt()
    
    // THEN Build a Engineer object

// Gather Intern data

    // inquirer.prompt()

    // THEN Build a Intern object


// Ask for which team member they want to add or "are they done"

    // inquirer.prompt()

    // THEN deciding which function to call 

// Generate the HTML and write it to a file

