// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gen = require('./utils/generateMarkdown');
var licenselist = [];
var licenseUrlList = [];
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
        name: 'contribution',
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
        choices: licenselist,
        default: '',
        loop: false
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
        let fileName = './results/README.md';
        const fileContent = writeToFile(fileName, data);
        fs.writeFile(fileName, fileContent, (err) => 
        err ? console.log(err) : console.log('Sucessfully created README.md file'));
    })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return gen.generateMarkdown(data);
}

function getLicense(){
    let url = 'https://api.github.com/licenses'
    fetch(url).then(function(response) {
        if(response.status === 200){
            return response.json();
        } 
    })
    .then(function(data) {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            licenselist.push(data[i].name);
            licenseUrlList.push(data[i].url);
        }
        console.log(data.length)
        // console.log(licenselist);
        // console.log(licenseUrlList);

    })
}


// TODO: Create a function to initialize app
function init() {
    getLicense();
}

// Function call to initialize app
init();
