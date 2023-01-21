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
