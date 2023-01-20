const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    // title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    // description questions
    // {
    //     type: 'input',
    //     name: 'descDo',
    //     message: 'What does your application do?',
    // },
    // {
    //     type: 'input',
    //     name: 'descMotivation',
    //     message: 'What was your motivation, why did you build your app?',
    // },
    // {
    //     type: 'input',
    //     name: 'descTechnology',
    //     message: 'What technologies did you use, and why?',
    // },
    // {
    //     type: 'input',
    //     name: 'descChallenges',
    //     message: 'What challenges did you face?',
    // },
    // {
    //     type: 'input',
    //     name: 'descLearnt',
    //     message: 'What have you learnt?',
    // },
    // {
    //     type: 'input',
    //     name: 'descFeatures',
    //     message: 'Are there any features you would like to add in the future?',
    // },
    // // installation questions
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'How to run / install the app?',
    // },
    // {
    //     type: 'input',
    //     name: 'instUrl',
    //     message: 'What is the URL to your app?',
    // },
    // // usage questions
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'Explain, step by step, how to use the app: ',
    // },
    // {
    //     type: 'input',
    //     name: 'screenshot',
    //     message: 'Enter the filepath to a screenshot of the app: ',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
    // {
    //     type: '',
    //     name: '',
    //     message: '',
    // },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        generateMarkdown(answers);
    });
}

// function call to initialize program
init();
