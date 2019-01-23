const { isSpare } = require('./frame.js'); 

test('', () => { 
    expect(isSpare({roll1: 5, roll2: 5})).toBe(true);
})