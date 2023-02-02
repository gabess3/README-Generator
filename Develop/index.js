// Imported packages needed for application. 

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions to be passed through Inquirer prompt.

const questions = [
    {
        type: 'input',
        message: 'What is the title of your README file?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'How do we install your application?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What is your application used for?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which license will be used?',
        name: 'license',
        choices: ['MIT', 'GPL v2', 'Apache', 'None']
    },
    {
        type: 'input',
        message: 'What are the contributing guidelines?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// Function that writes the README file.

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        return err ? console.error(err) : console.log("Your README file has been generated!")
    });
};

// Function that initializes the application. 

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        console.log(response);
        const newFile = generateMarkdown(response);
        writeToFile('./New_README/newREADME.md', newFile);
    })
};

// Function call to initialize app

init();