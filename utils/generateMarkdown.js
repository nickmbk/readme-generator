// function to generate markdown for README
function generateMarkdown(data) {
  const readmeTemplate = `
  # ${data.title}
  `
  return readmeTemplate;
}

module.exports = generateMarkdown;
