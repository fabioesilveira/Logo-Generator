const inquirer = require("inquirer")
const fs = require("fs")
const{Triangle, Square, Circle} = require("./lib/shapes")

const questions = [
    {
        type:"input",
        message:"Enter 3 characters text",
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


function init() {
    inquirer.prompt(questions)
    .then(answers=>{
        if(answers.shape == "Circle") {
            let shape = new Circle(answers.shapeColor, answers.text, answers.textColor)
            fs.writeFileSync("./logo.svg",shape.render())
        }
        if(answers.shape == "Square") {
            let shape = new Square(answers.shapeColor, answers.text, answers.textColor)
            fs.writeFileSync("./logo.svg",shape.render())
        }
        if(answers.shape == "Triangle") {
            let shape = new Triangle(answers.shapeColor, answers.text, answers.textColor)
            fs.writeFileSync("./logo.svg",shape.render())
        }
    })
}

init();