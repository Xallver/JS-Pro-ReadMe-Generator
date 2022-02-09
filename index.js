// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter your projects title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('You need to enter a project description!')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "install",
        message: "Enter installation insructions as a comma separated list:",
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You need to enter instructions for installation!')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "usage",
        message: "Enter usage information for your project:",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You need to enter usage info for your project!')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines for your project:",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines.')
                return false;
            }
        }

    },
    {
        type: "input",
        name: "testing",
        message: "Enter test information for your project:",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please enter test info for your project!')
                return false;
            }
        }
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username: (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }

    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address:",
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Which license does this project fall under? (Check all that apply)",
        choices: [
            "MIT License",
            "Code Project Open License (CPOL)",
            "Common Development and Distribution License (CDDL)",
            "Microsoft Public License (Ms-PL)",
            "Mozilla Public License 1.1 (MPL 1.1)",
            "Common Public License Version 1.0 (CPL)",
            "Eclipse Public License 1.0",
            "Apache License, Version 2.0"
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        // write file to readmegenerated.md by using data from generateMarkdown
        .then((data) => writeToFile('Readmegenerated.md', generateMarkdown(data)))
        // once printed without errors, success msg is printed
        .then(() => console.log("README.md successfully written!"))
        // this will print any errors in command line
        .catch((err) => console.log(err))
}

// Function call to initialize app
init();