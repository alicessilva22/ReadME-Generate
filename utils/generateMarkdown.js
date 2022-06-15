// Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
    let color;
    if (license === "GPL") color = "success";
    if (license === "AGPL") color = "yellow";
    if (license === "Apache") color = "red";
    if (license === "MIT") color = "lightgrey";
    if (license === "Mozilla") color = "blueviolet";
    if (license === "LGPL") color = "blue";
    if (license === "EPL") color = "orange";

    return (
    `[![License: ${license}](https://img.shields.io/badge/License-${license}-${color}.svg)](https://opensource.org/licenses/${license})
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