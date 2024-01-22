const {stringDNA} = require('../dna');

describe ('Process a DNA string ', () =>{
    test('Return the processed DNA', () => {
        expect(stringDNA('CTAGGgTA')).toBe('CTAG');
    });

});