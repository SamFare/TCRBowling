const {roll, score} = require('./game.js')

test('score is 0 when user rolls 0', () => { 
  roll(0)
  expect(score()).toBe(0)
})
  