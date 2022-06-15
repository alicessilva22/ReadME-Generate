// Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string
const renderLicenseBadge = (item) => {
    let color;
    if (item === "BSD-2-Clause") color = "yellow";
    if (item === "gpl-license") color = "lightgrey";
    if (item === "lgpl-license") color = "blueviolet";
    if (item === "MIT") color = "blue";
    if (item === "MPL-2.0") color = "orange";

    return (
    `[![License: ${item}](https://img.shields.io/badge/License-${item}-${color}.svg)]
    `
    );
};


// Create a function that returns a license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
    `(https://opensource.org/licenses/${license})`

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
[Email](mailto:${email})`
    );

    fs.writeFileSync('./output/README.md', template);
    console.log('Template Generated!');
    process.exit();
};
module.exports = {
    generateMarkdown
};