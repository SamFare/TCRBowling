const { isSpare } = require('./frame') 

const roll = (game, {roll1, roll2})  => { 
   const frames = game.frames.slice()
   frames.push({roll1, roll2})

   let totalScore = game.totalScore;

   if(isSpare(game.frames[game.frames.length - 1 ])) { 
      totalScore += (roll1 * 2) + roll2;

   } else {
    totalScore += roll1 + roll2;
   }
  
   return { totalScore, frames }
}

module.exports = { roll }
