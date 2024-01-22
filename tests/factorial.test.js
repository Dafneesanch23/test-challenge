const {factorial} = require('../factorial');

describe ('Return the factorial of a given number', () =>{
    test('Return the factorial of 5', () => {
        expect(factorial(5)).toBe(120);
    });

});