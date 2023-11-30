// generateMarkdown.js

// Function to return a license badge based on the license passed in
function renderLicenseBadge(license) {
    // Logic to return a license badge (e.g., depending on the license type)
  }
  
  // Function to return the license link
  function renderLicenseLink(license) {
    // Logic to return a license link (e.g., depending on the license type)
  }
  
  // Function to return the license section of README
  function renderLicenseSection(license) {
    // Logic to return the license section (e.g., depending on the license type)
  }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact me via:
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  `;
  }
  
  module.exports = generateMarkdown;
  