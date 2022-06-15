// Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
const renderLicenseBadge = (type) => {
    let color;
    if (type === "MPL") color = "success";
    if (type === "MPL") color = "yellow";
    if (type === "MPL") color = "red";
    if (type === "GPL") color = "lightgrey";
    if (type === "Apache") color = "blueviolet";
    if (type === "MIT") color = "blue";
    if (type === "CC") color = "orange";

    return (
        `      
        [![License: ${type}](https://img.shields.io/badge/License-${type}-${color}.svg)](https://opensource.org/licenses/AFL-3.0)
        `
    );
};


// Create a function that returns a license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {

}

// Create a function that returns a license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => { }

// Create a function to generate markdown for README

const fs = require('fs');
const generateMarkdown = ({
    title,
    description,
    license,
    installation,
    usage,
    credits,
    tests,
    github,
    email,
}) => {
    console.log('GENERATING MARKDOWN');
    const template = (`# ${title}

## Table of Contents 
* [License](#license)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Tests](#tests)
* [Questions?](#questions)

## Badges
${renderLicenseBadge(license)}

## License
[${license}](https://opensource.org/licenses/${license})

## Description
${description}

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## Tests
${tests}

## Questions?
[GitHub](https://github.com/${github})  
[Email] (mailto:${email})`
    );

    fs.writeFileSync('./output/README.md', template);
    console.log('Template Generated!');
    process.exit();
};
module.exports = {
    generateMarkdown
};