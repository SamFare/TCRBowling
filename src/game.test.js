const {roll} = require('./game.js')

test('score is 0 when user rolls 0', () => { 
  const game = roll({totalScore: 0, frames: []} , {roll1: 0, roll2: 0})
  expect(game.totalScore).toBe(0)
})

test('when the game is full of single scores the final score is the sum of the scores', () => { 
  const allRollsInGame = new Array(10).fill({roll1: 1, roll2: 1})
  const gameScore = allRollsInGame.reduce((acc, frame) => roll(acc, frame),  {totalScore: 0, frames: []})
  expect(gameScore.totalScore).toBe(20)
})

test('previous frames are saved are added to frame list', () => { 
  const game = roll({totalScore: 0, frames: []} , {roll1: 0, roll2: 0})
  expect(game.frames).toEqual([{roll1: 0, roll2: 0}])
});

test('When the player rolls a spare the game doubles the score of the next roll', () => { 
  const game = roll({totalScore: 0, frames: []} , {roll1: 5, roll2: 5})
  const spare = roll(game , {roll1: 2, roll2: 0})
  expect(spare.totalScore).toBe(14)
})

test('when one of the rolls is a 10 the next round is doubled', () => { 
  const game = roll({totalScore: 0, frames: []} , {roll1: 10, roll2: 0})
  const strike = roll(game , {roll1: 2, roll2: 2})
  expect(strike.totalScore).toBe(18)
})