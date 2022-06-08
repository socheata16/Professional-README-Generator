const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'installation',
      message: 'How to install the project',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How to use the project',
      
    },
    {
      type: 'input',
      name: 'License',
      message: 'What license will we use',
      
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'How to contribute this project',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'How to test the project',
        
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Do you have any questions?',
        
      },

  ])
  .then((response) => {
    console.log(response);

    fs.appendFile("log.txt", JSON.stringify(response, null, '\t'), err => {
          err ? console.error(err) : console.log("File Updated");
    });

})
