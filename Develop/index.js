// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  name: 'title',
  message: 'What is the name of your project?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter a name';
    }
  }
},
{
  type: 'input',
  name: 'description',
  message: 'What is the description of your project?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter a something';
    }
  }
},

{
  type: 'input',
  name: 'installation',
  message: 'How do you install your app?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter a something';
    }
  }
},
{
  type: 'input',
  name: 'instructions',
  message: 'what instructions must we follow?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter a instructions or write "N/A"';
    }
  }
},
{
  type: 'input',
  name: 'contributors',
  message: 'any contributors or references?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter something';
    }
  }
},
{
  type: 'input',
  name: 'tests',
  message: 'what can we do to test this?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter something';
    }
  }
},
{
  type: 'input',
  name: 'usage',
  message: 'how do you use your app?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter something';
    }
  }
},
{
  type: 'list',
  name: 'license',
  message: 'What license did you use?',
  choices: [ 'MIT', 'Apache', 'GPL', 'None'],
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please select something';
    }
  }
},
{
  type: 'input',
  name: 'git',
  message: 'What is your github username?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter a username';
    }
  }
},
{
  type: 'input',
  name: 'email',
  message: 'What is your email?',
  validate: (value) => { 
    if (value){
      return true;
    } else {
      return 'Please enter an email';
    }
  }
},];



// TODO: Create a function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./generatedREADME.md', fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        success: true
      });
    });
  });
};
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(answer) {
      console.log(answer);
      let fileContent = generateMarkdown(answer);
      writeToFile(fileContent);
    })

}

// Function call to initialize app
init();
