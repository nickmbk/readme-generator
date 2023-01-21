const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
// const titleDesciptionQuestions = [
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
        type: 'choices',
        name: 'license',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
    },
    {
        type: '',
        name: '',
        message: '',
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
// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Success!'));
// }

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
