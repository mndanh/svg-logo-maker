const { Circle, Square, Triangle } = require('./shapes.js');

describe('Shapes', () => {

    describe('Circle', () => {

        it('should render a maroon circle with gold text that says dan', () => {
            const shape = new Circle('dan', 'gold', 'maroon');
            expect(shape.render()).toEqual(`
        <html>
            <svg width="300" height="300" viewBox="0 0 300 300">
                <circle cx="150" cy="150" r="100" fill="maroon" />
                <text fill="gold" x="150" y="150" font-size="30" text-anchor="middle" alignment-baseline="middle">dan</text>
            </svg>
        </html>
        `);
        });
    });

    describe('Square', () => {

        it('should render a pink square with green text that says HII', () => {
            const shape = new Square('HII', 'green', 'pink');
            expect(shape.render()).toEqual(`
            <svg width="300" height="300" viewBox="0 0 300 300">
                <rect x="50" y="50" width="200" height="200" fill="pink" />
                <text fill="green" x="150" y="150" font-size="30" text-anchor="middle" alignment-baseline="middle">HII</text>
            </svg>
        `);
        });
    });

    describe('Triangle', () => {

        it('should render a black triangle with white lettering that says FFF', () => {
            const shape = new Triangle('FFF', '#ffffff', 'black');
            const expectedString = `     
            <svg width="300" height="300" viewBox="0 0 300 300">
                <polygon points="150,25 275,275 25,275" fill="black" />
                <text fill="#ffffff" x="150" y="180" font-size="30" text-anchor="middle" alignment-baseline="middle">FFF</text>
            </svg>
        `
            expect(shape.render().trim()).toEqual(expectedString.trim());
        });
    });
});

