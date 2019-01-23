const {roll, score} = require('./game.js')

test('score is 0 when user rolls 0', () => { 
  gameScore = roll(0, 0)
  expect(gameScore).toBe(0)
})

test('when the game is full of single scores the final score is the sum of the scores', () => { 
  const allRollsInGame = new Array(10).fill({roll1: 1, roll2: 1})
const gameScore = allRollsInGame.reduce((acc, {roll1, roll2}) => acc + roll1 + roll2, 0)
  expect(gameScore).toBe(20)
})

test('When the player rolls a spare the game doubles the score of the next roll', () => { 
})