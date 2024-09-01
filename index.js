const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require("./lib/shapes.js");

const htmlColor = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet",
    "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue",
    "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid",
    "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue",
    "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod",
    "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush",
    "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen",
    "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue",
    "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite",
    "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "rebeccapurple", "red", "rosybrown", "royalblue",
    "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow",
    "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"
];

const isValidHexColor = (hex) => /^#([0-9A-F]{3}|[0-9A-F]{6})$/i.test(hex);
const isHtmlColor = (color) => htmlColor.includes(color.toLowerCase());

const validateColorInput = (color) => {
    if (isHtmlColor(color) || isValidHexColor(color)) {
        return true;
    } else {
        return "Invalid color input. Please enter a valid HTML color name or hex value.";
    }
};

const validateTextInput = (input) => {
if(input.length > 3) {
    return "Text input must be no more than 3 characters.";
}
return true;
};
  
function userQuestions() {
    return [
    {
        type: 'input',
        name: 'text',
        message: "Enter 3 characters to add text to your logo.",
        validate: validateTextInput
    },
    {
        type: 'input',
        name: 'textColor',
        message: "What color do you want the text to be?",
        validate: validateColorInput
    },
    {
        type: 'list',
        name: 'shape',
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: "What color do you want the shape to be?",
        validate: validateColorInput
    },
    ]
};

// not going to create async await function until i've finished shapes.js
async function init() {
    const questions = userQuestions();
    const replies = await inquirer.prompt(questions);
    let shape;
    if (replies.shape === "Circle") {
        shape = new Circle(replies.text, replies.textColor, replies.shapeColor);
    } else if (replies.shape === "Square") {
        shape = new Square(replies.text, replies.textColor, replies.shapeColor);
    } else if (replies.shape === "Triangle") {
        shape = new Triangle(replies.text, replies.textColor, replies.shapeColor);
    }
    const outputSVG = shape.render();
    fs.writeFile('logo.svg', outputSVG, (err) => {
        if (err) {
            console.error("Could not generate SVG");
        } else {
            console.log("Generated logo.svg");
        }
    });
}

init();