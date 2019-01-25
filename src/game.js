const roll = (game, {roll1, roll2})  => { 
  game.frames.push({roll1, roll2})
   return {
    totalScore: game.totalScore + roll1 + roll2, 
    frames: game.frames 
   }
}

module.exports = { roll }
