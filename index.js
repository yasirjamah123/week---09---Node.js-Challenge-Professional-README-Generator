const inquirer = require('inquirer');
const fs = require('fs');

// Function to generate the README content based on user input
function generateReadme(answers) {
  const {
    title,
    description,
    installation,
    usage,
    contribution,
    tests,
    license,
    github,
    email
  } = answers;

  const readmeContent = `# ${title}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## License
This application is covered under the ${license} license.

## Contributing
${contribution}

## Tests
${tests}

## Questions
For any questions or feedback, feel free to reach out:
- GitHub: [${github}](https://github.com/${github})
- Email: ${email}
`;

  return readmeContent;
}

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to prompt user with Inquirer
function promptUser() {
  return inquirer.prompt(questions);
}

// Function to write README file
function writeReadme(filename, data) {
  fs.writeFile(filename, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md created successfully!');
    }
  });
}

// Start the application by prompting the user and generating README
promptUser()
  .then((answers) => {
    const readmeContent = generateReadme(answers);
    writeReadme('README.md', readmeContent);
  })
  .catch((err) => {
    console.error(err);
  });
