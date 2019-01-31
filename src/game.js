const { isSpare } = require('./frame') 

const calculateTotalScore = (game, {roll1, roll2}) => { 
  if(isSpare(game.frames[game.frames.length - 1 ])) { 
    return game.totalScore + (roll1 * 2) + roll2;

  } else {
    return game.totalScore + roll1 + roll2;
  }
}
const roll = (game, rolls)  => { 
   const frames = game.frames.slice()
   frames.push(rolls)
   return { totalScore: calculateTotalScore(game, rolls), frames }
}

module.exports = { roll }
