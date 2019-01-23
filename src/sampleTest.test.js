const {roll, score} = require('./game.js')

test('score is 0 when user rolls 0', () => { 
  const game = roll({totalScore: 0, frames: []} , {roll1: 0, roll2: 0})
  expect(game.totalScore).toBe(0)
})

test('when the game is full of single scores the final score is the sum of the scores', () => { 
  const allRollsInGame = new Array(10).fill({roll1: 1, roll2: 1})
  const gameScore = allRollsInGame.reduce((acc, frame) => roll(acc, frame),  {totalScore: 0, frames: []})
  expect(gameScore.totalScore).toBe(20)
})

test('When the player rolls a spare the game doubles the score of the next roll', () => { 
})