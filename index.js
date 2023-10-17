// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkDown = require('utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Give a description of your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Any installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Any usage information?',
    },
    {
        type: 'input',
        name: 'contr',
        message: 'Any Contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any test intructions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['license1', 'license2', 'license3']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

inquirer.prompt(questions)
    .then((data) => {
        let fileName = 'README.md';
        const fileContent = writeToFile(fileName, data);
        fs.writeFile(fileName, fileContent, (err) => 
        err ? console.log(err) : console.log('Sucessfully created README.md file'));
    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return genMarkDown.generateMarkdown(data);
}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
