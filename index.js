// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are your application\'s licenses?',
        name: 'licenses',
    },
    {
        type: 'input',
        message: 'How is your project installed?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is your project\'s usage?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who collaborated in your project?',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Please provide tests for your application',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
];



// Create a function to write README file
function writeToFile(input) {
    const title = `# ${input.title}
##Table of Contents 
[Description](#description)
[Licenses](#licenses)
[Installation](#installation)
[Usage](#usage)
[Credits](#credits)
[Tests](#tests)
[Questions](#questions)
## Description 
${input.description}
## Installation 
${input.installation}
## Usage
${input.usage}
## License
${input.license}
## Contributing
${input.contributions}
## Testing
${input.test}
## Questions 
${input.github}
${input.email}`
console.log(title);

}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers);
    });
}
init();