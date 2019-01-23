const { isSpare } = require('./frame.js'); 

test('', () => { 
    expect(isSpare(5,5)).toBe(true);
})