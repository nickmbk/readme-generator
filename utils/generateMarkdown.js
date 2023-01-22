// function to generate markdown for README, taking the data parameter as the answers from the user
function generateMarkdown(data) {
  // store the template in the variable readmeTemplate
  let readmeTemplate = `
  # ${data.title}

  ## Description

  ${data.descDo}

  ${data.descMotivation}

  ${data.descTechnology}

  ${data.descChallenges}

  ${data.descLearnt}

  ${data.descFeatures}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  Repo: [${data.title}](${data.instUrl})

  ## Usage

  ${data.usage}

  ![${data.title} Screenshot](${data.screenshot})

  ## Credits

  ### Contributors

  ${data.contributors}

  ### Resources
  
  ${data.resources}

  ## License
  `

  let licenseBadge = '';
  // depending on what license the user selected, will insert the required badge for that particular license.
  switch(data.license) {
    case 'GNU v3.0' :
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT':
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    default:
      licenseBadge = '';
  }

  // continue to add to the template
  readmeTemplate += `

  ${licenseBadge}

  This project uses the ${data.license} License.

  ### Contributing

  ${data.howToContribute}

  ## Tests

  ${data.tests}

  ## Questions

  Please contact me if you have any questions:

  ${data.usersName}

  [${data.email}](${data.email})

  [GitHub: ${data.github}](https://www.github.com/${data.github})


  `

  // return the template created
  return readmeTemplate;
}

//export this function to be used in index.js
module.exports = generateMarkdown;
