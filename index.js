const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
// const titleDesciptionQuestions = [
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
    {
        type: 'input',
        name: 'twitter',
        message: 'What is your Twitter username? (Do not add the @)',
    },
//     // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
//     // description questions
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
// ];
// const installationQuestions = [
//     // installation questions
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
// ];
// const usageQuestions = [
//     // usage questions
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
// ];
// const contributorQuestion = [
    // credits
    // {
    //     type: 'confirm',
    //     default: 'yes',
    //     name: 'contributors',
    //     message: 'Were there any contributors to the project?',
    // },
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
    {
        type: 'input',
        name: 'tests',
        message: 'What tests can users run?',
    },
    {
        type: 'input',
        name: 'anyQuestions',
        message: 'What can the user do if they have any questions?',
        default: 'Contact me for any questions you have.'
    },
];
// const contributor = [
//     {
//         type: 'input',
//         name: 'contributor',
//         message: 'What was the name of the contributor: ',
//     },
//     {
//         type: 'input',
//         name: 'contributorGithub',
//         message: 'What is the contributor\'s GitHub URL: ',
//     },
// ]
// ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!'));
}

// function to initialize program
function init() {
    inquirer
    // .prompt(contributorQuestion)
    // .then((answer) => {
    //     if (answer.contributors) {
    //         inquirer
    //         .prompt(contributor)
    //         .then((answers2) => {
    //             console.log(answer, answers2);
    //         });
    //     }
    // });
    .prompt(questions)
    .then((answers) => {
        const readmeFile = generateMarkdown(answers);
        writeToFile("README.md", readmeFile);
    });
}

// function call to initialize program
init();
