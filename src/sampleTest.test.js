const {roll, score} = require('./game.js')

test('score is 0 when user rolls 0', () => { 
  roll(0)
  expect(score()).toBe(0)
})

test('when the game is full of single scores the final score is the sum of the scores', () => { 
  const x = new Array(20).fill(1)
  x.forEach(rollValue => roll(rollValue))
})
  