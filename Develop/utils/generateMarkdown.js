// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'Apache') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GPL') {
    badge = '![License GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ''
  }
  return badge;
}

function renderLicenseLink(license) {
  let licenseLink = '';
    if (license === 'MIT') {
      licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license === 'Apache') {
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  } else if (license === 'GPL') {
      licenseLink = 'https://opensource.org/licenses/GPL-3.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

function renderLicenseSection(license) {
  let licenseSection = '';
  if (license === 'None') {
    licenseSection = ''
  } else {
  licenseSection = 
  `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents:
  ###  * [Description](#description)
  ###  * [Installation](#installation)
  ###  * [Instructions](#instructions)
  ###  * [Contributors](#contributors)
  ###  * [Tests](#tests)
  ###  * [Usage](#usage)
  ###  * [License](#license)
  ###  * [Contact-me](#contact-me)
  

  ## Description
  ${answer.description}
  ## Installation
  ${answer.installation}
  ## Instructions
  ${answer.instructions}
  ## Contributors
  ${answer.contributors}
  ## Tests
  ### Run the following commands in your terminal to test this app:
  ${answer.tests}
  ## Usage
  ${answer.usage}
  ## License
  ${answer.license}
  ## Contact-Me:
  ### If you have any questions, contact me at either
  ### Github: https://github.com/${answer.git}
  ### or
  ### Email:  ${answer.email}`;  
  }

module.exports = generateMarkdown;
