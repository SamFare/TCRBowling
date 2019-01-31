const { isSpare, isStrike } = require('./frame.js'); 

test('there is a spare when the two rolls add to 10', () => { 
    expect(isSpare({roll1: 5, roll2: 5})).toBe(true);
})

test('there is not a spare when a frames rolls do not add up to 10', () => { 
    expect(isSpare({roll1: 4, roll2: 4})).toBe(false);
})

test('flase is returned when no frame is presented', () => { 
    expect(isSpare(undefined)).toBe(false);
})

test('there is not a spare when roll 1 is 10', () => { 
    expect(isSpare({roll1: 10, roll2: 0})).toBe(false);
})

test('there is not a spare when roll 2 is 10', () => { 
    expect(isSpare({roll1: 0, roll2: 10})).toBe(false);
})

test('when roll 1 is 10 it is a strike', () => { 
    expect(isStrike({roll1: 10, roll2: 0})).toBe(true);
})