const { isSpare } = require('./frame.js'); 

test('there is a spare when the two rolls add to 10', () => { 
    expect(isSpare({roll1: 5, roll2: 5})).toBe(true);
})

test('there is not a spare when a frames rolls do not add up to 10', () => { 
    expect(isSpare({roll1: 4, roll2: 4})).toBe(false);
})