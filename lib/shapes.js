// Make a class constructor for each shape: Circl, Square, and Triangle:

class Circle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    printImg() {
        return `
        <html>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="100" fill="${this.shapecolor}" />
            <text fill="${this.textcolor}" x="150" y="150" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>
        </html>
        `;
    }
}

class Square {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    printImg() {
        return `
        <html>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <rect x="50" y="50" width="200" height="200" fill="${this.shapecolor}" />
            <text fill="${this.textcolor}" x="150" y="150" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>
        </html>
        `;
    }
}

class Triangle {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
    printImg() {
        return `
        <html>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <polygon points="150,25 275,275 25,275" fill="${this.shapecolor}" />
                <text fill="${this.textcolor}" x="150" y="180" font-size="30" text-anchor="middle" alignment-baseline="middle">${this.text}</text>
            </svg>
        </html>
        `;
    }
}

module.exports = { Circle, Square, Triangle };
