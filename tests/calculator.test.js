//const { default: expect } = require('expect');

const {calc} = require('../calculator.js');

const a = 15;
const b = 3;

test('adds a + b', () => {
    expect(calc.sum (a,b)).toBe(18);
})

test('substracts a - b', () => {
   expect(calc.substract (a,b)).toBe(12);
})

test('multiplies a * b', () => {
    expect(calc.multiply (a,b)).toBe(45);
})

test('divides a / b', () => {
    expect(calc.divide (a,b)).toBe(5);
})

test('Raises to power a ^ b', () => {
    expect(calc.power (a,b)).toBe(3375);
})

