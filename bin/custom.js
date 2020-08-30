#!/usr/bin/env node

var inquirer = require('inquirer');

inquirer
  .prompt([{
      type: "input",
      message: "What is the title of the repository?",
      name: "title"
    },
    {
      type: "input",
      message: "What desription would you like to add to the repository?",
      name: "description"
    },
    {
      type: "input",
      message: "What elements would you like to include in the table of contents?\n(seperate each element with a space or leave blank for default elements)",
      name: "toc"
    },
    {
      type: "input",
      message: "What would you like in the installation section?",
      name: "installation"
    },
    {
      type: "input",
      message: "What would you like in the usage section?",
      name: "usage"
    },
    {
      type: "input",
      message: "What licenses are included in this repository?",
      name: "license"
    },
    {
      type: "input",
      message: "What would you like to add in the contributing section?",
      name: "contributing"
    },
    {
      type: "input",
      message: "What would you like in the tests section?",
      name: "tests"
    },
    {
      type: "input",
      message: "What would you like in the questions section?",
      name: "questions"
    },
  ])
  .then(answers => {
    var fs = require("fs");

    const title = answers.title;
    const description = answers.description;
    const toc = answers.toc;
    const installation = answers.installation;
    const usage = answers.usage;
    const license = answers.license;
    const contributing = answers.contributing;
    const tests = answers.tests;
    const questions = answers.questions;
    //make sure to change when pushing changes
    fs.writeFile("README.md", buildTitle(title) + "\n", function (err) {
      if (err) {
        console.log(err);
      }

      fs.appendFile("README.md", "\n ## Description \n" + description + "\n", function (err) {
        if (err) {
          console.log(err);
        }

        fs.appendFile("README.md", "\n ## Table of Contents \n" + buildTOC(toc) + "\n", function (err) {
          if (err) {
            console.log(err);
          }

          fs.appendFile("README.md", "\n ## Instalation \n" + installation + "\n", function (err) {
            if (err) {
              console.log(err);
            }

            fs.appendFile("README.md", "\n ## Usage \n" + usage + "\n", function (err) {
              if (err) {
                console.log(err);
              }

              fs.appendFile("README.md", "\n ## License \n" + license + "\n", function (err) {
                if (err) {
                  console.log(err);
                }

                fs.appendFile("README.md", "\n ## Contributions \n" + contributing + "\n", function (err) {
                  if (err) {
                    console.log(err);
                  }

                  fs.appendFile("README.md", "\n ## Tests \n" + tests + "\n", function (err) {
                    if (err) {
                      console.log(err);
                    }

                    fs.appendFile("README.md", "\n ## Questions \n" + questions + "\n", function (err) {
                      if (err) {
                        console.log(err);
                      }
                    })
                  })
                })
              })
            })
          })
        })
      })
    })





  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

function buildTitle(title) {
  const newtitle = "# " + title;
  return newtitle;
}

function buildTOC(toc) {
  const defTOC = "-Instalation\n\n-Usage\n\n-Liscense\n\n-Contributions\n\n-Tests\n\n-Questions\n";
  if (toc === "") {
    return defTOC;
  } else {
    const newTOC = "-" + toc.replace(/ /g, '\n\n-');
    return newTOC;
  }

}