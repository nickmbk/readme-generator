// function to generate markdown for README
function generateMarkdown(data) {
  const readmeTemplate = `
  # ${data.title}

  ## Description

  ${data.descDo}

  ${data.descMotivation}

  ${data.descTechnology}

  ${data.descChallenges}

  ${data.descLearnt}

  ${data.descFeatures}

  ## Table of Contents

  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credits] (#credits)
  - [License] (#license)
  - [Tests] (#tests)
  - [Questions] (#questions)

  ## Installation

  ${data.installation}

  Repo: [${data.title}] (${data.instUrl})

  ## Usage

  ${data.usage}

  ![${data.title} Screenshot] (${data.screenshot})

  ## Contributors

  ${data.contributors}

  ${data.resources}

  ## License
  `
  let licenseBadge = '';

  switch(data.license) {
    case 'GNU v3.0' :
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'MIT':
      licenseBadge='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
  }

  readmeTemplate += `
  ${licenseBadge}

  ${data.license}

  ${data.howToContribute}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.anyQuestions}

  ${data.usersName}
  ${data.email}
  https://www.github.com/${data.github}
  https://www.twitter.com/${data.twitter}

  `


  return readmeTemplate;
}

module.exports = generateMarkdown;
