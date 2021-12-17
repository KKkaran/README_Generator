//this app will take user inputs and create a professional readme file
const fs = require("fs")
const inquirer = require("inquirer")
const generateReadme = require("./readmeTemplate")
const email_validator = require("email-validator")


//this function writes content to the file
const writeReadMe = (fileContent)=>{
    fs.writeFile("./README.md",fileContent,(err,done)=>{
        if(err){
            console.log("some error when writing the file")
            return
        }
        console.log("Content written successfully!!")
    })
}
//this function asks for input before sending to the template
const ask4Inputs = ()=> {

    return inquirer.prompt(
        [ //all the inputs are taken below
            {
                type: "input",
                name: "title",
                message: "What is the title of your project? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the title of your project!');
                        return false;
                        }
                    }
            },
            {
                type: "input",
                name: "description",
                message: "Please give a brief description of your project: (Required)",
                validate: desc => {
                    if (desc) {
                        return true;
                    } else {
                        console.log('Please give a brief description of your project.');
                        return false;
                        }
                    }
            },
            {
                type: "input",
                name: "install",
                message: "List of packages need to be installed (if applicable)",
                default : "None"
            },
            {
                type: "input",
                name: "usage",
                message: "Please describe the usage of your project. (if applicable)",
                default: "None"
            },
            {
                type: "list",
                name: "license",
                message: "Choose the type of License: (Required)",
                choices : ["MIT","Apache2.0","IPL1.0","ISC"],
                
                // validate: desc => {
                //     if (desc) {
                //         return true;
                //     } else {
                //         console.log('Please give a brief description of your project.');
                //         return false;
                //         }
                //     }
            },
            {
                type: "input",
                name: "contri",
                message: "Please enter contribution guidelines for your repo. (if applicable)",
                default: "None",
                // validate: desc => {
                //     if (desc) {
                //         return true;
                //     } else {
                //         console.log('Please give a brief description of your project.');
                //         return false;
                //         }
                //     }
            },
            {
                type: "input",
                name: "test",
                message: "Was any sort of testing done on the project. (if applicable) ",
                default: "None",
                // validate: desc => {
                //     if (desc) {
                //         return true;
                //     } else {
                //         console.log('Please give a brief description of your project.');
                //         return false;
                //         }
                //     }
            },
            {
                type: "input",
                name: "email",
                message: "Please provide your email for reaching out: (Required)",
                validate: function (email) {
  
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        
                    if (valid) {
                      //console.log("Great job");
                        return true;
                    } else {
                        console.log(".  Please enter a valid email")
                        return false;
                    }  
                }
            },
            {
                type: "input",
                name: "github",
                message: "Please provide your github name: (Required)",
                validate: github => {
                    if (github) {
                        return true;
                    } else {
                        console.log('Please give your github name.');
                        return false;
                        }
                    }
            }

])
}

//all the promises go below
ask4Inputs()
    .then(generateReadme)//function gets the input and manipulates the data in template and sends back to tbe written to the file
    .then(writeReadMe)
