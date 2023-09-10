const fs = require('fs');

function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    const licenseName = license.replace(/-/g, '--').replace(/\s/g, '%20');
    return `[![${license} license](https://img.shields.io/badge/License-${licenseName}-blue.svg)](${renderLicenseLink(license)})`;
  }
}

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (license === 'CC--0') {
    return `https://creativecommons.org/publicdomain/zero/1.0/`;
  }
}

function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more click the license button at the top.`
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.licenses)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Have questions about this project?  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  ${data.name}
`;
}

module.exports = generateMarkdown;