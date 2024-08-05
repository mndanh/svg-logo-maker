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
            <svg width="300" height="300" viewBox="-100 -100 300 300">
                <circle cs="0" cy="0" r="100" fill="${this.shapecolor}"/>
            <text fill="${this.textcolor}" x="0" y="0" font-size="30" text-anchor="middle">${this.text}</text>
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
            <svg width="300" height="300" viewBox="-100 -100 300 300">
                <square x="-100" y="-100" width="300" height="300" fill="${this.shapecolor}"/>
            <text fill="${this.textcolor}" x="0" y="0" font-size="30" text-anchor="middle">${this.text}</text>
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
                <rect x="50" y="50" width="200" height="200" fill="${this.shapecolor}" />
                <text fill="${this.textcolor}" x="150" y="150" font-size="30" text-anchor="middle">${this.text}</text>
            </svg>
        </html>
        `;
    }
}

module.exports = {Circle, Square, Triangle}
