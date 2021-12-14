//this app will take user inputs and create a professional readme file
const fs = require("fs")
const inquirer = require("inquirer")
const generateReadme = require("./readmeTemplate")

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
const ask4Input = ()=> {

    return inquirer.prompt(
        [{
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
            {
        type: "number",
        name: "age",
        message: "What is your age? (Required)",
        validate: age => {
            if (age) {
                return true;
            } else {
                console.log('Please enter your age!');
                return false;
            }
        }
    }])
}


ask4Input()
    .then(generateReadme)//function gets the input and manipulates the data in template and sends back to tbe written to the file
    .then(writeReadMe)



//writeReadMe(`<h1 align='center'></h1>`)
