const roll = (game, {roll1, roll2})  => { 
   //return total + roll1 + roll2
   return {
     totalScore: game.totalScore + roll1 + roll2 
   }
}

module.exports = { roll }
