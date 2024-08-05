const inquirer = require('inquirer')
const fs = require('fs')

function UserQuestions() {
    return [
    {
        type: 'input',
        name: 'text',
        message: "Enter 3 characters to add text to your logo.",
    },
    {
        type: 'input',
        name: 'textColor',
        message: "What color do you want the text to be?"
    },
    {
        type: 'list',
        name: 'shape',
        message: "choose a shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color do you want the shape to be?"
    },
    ]
}