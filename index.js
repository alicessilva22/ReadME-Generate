// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const utils = require('./utils/generateMarkdown');

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
        type: 'rawlist',
        message: 'What are your application\'s licenses?',
        name: 'license',
        choices: ["BSD-2-Clause", "gpl-license", "lgpl-license", "MIT", "MPL-2.0"]
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

// Create a function to initialize app

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    utils.generateMarkdown(answers);
});
