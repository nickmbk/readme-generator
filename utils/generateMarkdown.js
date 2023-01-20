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
  - Credits (#credits)
  - [License] (#license)

  ## Installation

  ${data.installation}

  [${data.title}] (${data.instUrl})

  ## Usage

  ${data.usage}

  ![${data.title} Screenshot] (${data.screenshot})
  `
}

module.exports = generateMarkdown;
