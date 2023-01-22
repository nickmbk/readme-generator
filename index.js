// import required modules 
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // users details
    {
        type: 'input',
        name: 'usersName',
        message: 'What is your full name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // description questions
    {
        type: 'input',
        name: 'descDo',
        message: 'What does your application do?',
    },
    {
        type: 'input',
        name: 'descMotivation',
        message: 'What was your motivation, why did you build your app?',
    },
    {
        type: 'input',
        name: 'descTechnology',
        message: 'What technologies did you use, and why?',
    },
    {
        type: 'input',
        name: 'descChallenges',
        message: 'What challenges did you face?',
    },
    {
        type: 'input',
        name: 'descLearnt',
        message: 'What have you learnt?',
    },
    {
        type: 'input',
        name: 'descFeatures',
        message: 'Are there any features you would like to add in the future?',
    },
    // installation questions
    {
        type: 'input',
        name: 'installation',
        message: 'How to run / install the app?',
    },
    {
        type: 'input',
        name: 'instUrl',
        message: 'What is the URL to your app?',
    },
    // usage questions
    {
        type: 'input',
        name: 'usage',
        message: 'Explain, step by step, how to use the app: ',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the filepath to a screenshot of the app: ',
    },
    // credits questions
    {
        type: 'input',
        name: 'contributors',
        message: 'Name any contributors and they\'re GitHub URL\'s: ',
    },
    {
        type: 'input',
        name: 'resources',
        message: 'Name any resources used and the links for them: ',
    },
    // license questions
    {
        type: 'list',
        name: 'license',
        message: 'What license have you used?',
        choices: ['GNU v3.0', 'MIT', 'Apache 2.0'],
        default: [0],
    },
    {
        type: 'input',
        name: 'howToContribute',
        message: 'How can other users contribute to your project?',
    },
    // test questions
    {
        type: 'input',
        name: 'tests',
        message: 'What tests can users run?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    // fs uses the writeToFile method and accepts the fileName argument that will contain what filename to save the file under, and the data argument which will contain what to write inside the file.
    fs.writeFile(fileName, data, (err) =>
    // if there is an error when writing the file, console.log the error to the user, otherwise console.log Success! to the user so they know the file has been created.
    err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    // run inquirer to prompt the user for the questions
    inquirer
        .prompt(questions)
        // and when they have answered...
        .then((answers) => {
            // call the generateMarkdown function passing the answers from the user as the data to create the README template, store what is returned in the const readmeFile
            const readmeFile = generateMarkdown(answers);
            // call the writeToFile function passing README.md as the filename and readmeFile const as the data to put in the file
            writeToFile('../README.md', readmeFile);
        });
}

// function call to initialize program on startup
init();
