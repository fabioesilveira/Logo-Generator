const inquirer = require("inquirer")
const fs = require("fs")

const questions = [
    {
        type:"input",
        message:"Enter text",
        name:"text"
    },
    
    {
        type:"input",
        message:"Enter text color",
        name:"textColor"
    },
    {
        type:"list",
        message:"Select a shape",
        name:"shape",
        choices:["Circle","Triangle","Square"]
    },
    {
        type:"input",
        message:"Enter shape's color",
        name:"shapeColor"
    },
    
    ]


function writeToFile(fileName, data) {}


function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        fs.writeFileSync("./logo.svg",`${answers.text} 
        ${answers.textColor} 
        ${answers.shape}
        ${answers.shapeColor}`)
    })
}

init();