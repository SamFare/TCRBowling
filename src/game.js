const { isSpare } = require('./frame') 

const roll = (game, {roll1, roll2})  => { 
   const frames = game.frames.slice()
   frames.push({roll1, roll2})

   if(isSpare(game.frames[game.frames.length - 1 ])) { 
    return {
      totalScore: game.totalScore + (roll1 * 2) + roll2, 
      frames 
     }
   }
    return {
      totalScore: game.totalScore + roll1 + roll2, 
      frames 
    }
}

module.exports = { roll }
