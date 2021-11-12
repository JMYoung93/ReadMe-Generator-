var inquirer = require("inquirer");
const fs = require("fs");

const userInfo = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's name?",
        },
        {
            type: "input",
            name: "description",
            message: "Describe your project.",
        },
        {
            type: "input",
            name: "installation",
            message: "How do users install your project?",
        },
        {
            type: "input",
            name: "usage",
            message: "How can users put your project to use?",
        },
        {
            type: 'list',
            message: "Choose a license for your project.",
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
            name: 'license'
        },
        {
            type: "input",
            name: "contributing",
            message: "How can others contribute to your project?",
        },
        {
            type: "input",
            name: "tests",
            message: "How cab others run tests using your project.",
        },
        {
            type: "input",
            name: "questions",
            message: "How can users contact you if they have any questions regarding your project?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your gitHub URL?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ]);
};

const badges = {
    'GNU AGPLv3': 'https://img.shields.io/badge/License-AGPL_v3-blue.svg',
    'GNU GPLv3':'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'GNU LGPLv3': 'https://img.shields.io/badge/License-LGPL_v3-blue.svg',
    'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
    'Apache License 2.0':'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
}

const generateReadme = ({
    title,
    description,
    table,
    installation,
    usage,
    license,
    contributing,
    tests,
    questions,
    github,
    email,
}) => `# ${title}

![Badge for GitHub repo top language](${badges[license]})

## Description 

*The what, why, and how:* 

${description}

## Table of Contents

 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)  
 * [Questions](#questions)
 * [Github](#github)
 * [Email](#email)



## Installation

*Steps required to install project and how to get the development environment running:*

${installation}




## Usage 

*Instructions and examples for use:*

${usage}




## Contributing

*If you would like to contribute it, you can follow these guidelines for how to do so.*

${contributing}




## Tests

*Tests for application and how to run them:*

${tests}




## License

${license}



## Questions

*If you have any questions you can reach me at my github at: ${github} or email: ${email}.

${questions}

`;

const init = () => {
    userInfo()
        // Use writeFileSync method to use promises instead of a callback function
        .then((answers) => fs.writeFileSync('./README.md', generateReadme(answers)))
        .then(() => console.log('Successfully wrote to ReadMe.md'))
        .catch((err) => console.error(err));
};
init();
