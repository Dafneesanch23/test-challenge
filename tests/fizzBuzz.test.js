//const { default: expect } = require('expect');
const {divisor} = require('../fizzBuzz.js');

describe ('fizzBuzz function test', () =>{
    test('Return "Fizz" for numbers divisible by 3', () => {
        expect(divisor(9)).toBe('Fizz');
    });

    test('Return "Buzz" for numbers divisible by 5', () => {
        expect(divisor(10)).toBe('Buzz');
    });

    test('Return "FizzBuzz" for numbers divisible by 3 and 5', () => {
        expect(divisor(15)).toBe('FizzBuzz');
    });

    test('Return the original number for other cases', () => {
        expect(divisor(7)).toBe(7);
    });
});