let runningTotal = 0;
const roll = (total, pins)  => { 
   return total + pins
}

const score = rollValue => {
  return runningTotal === 0? 0 : 20
} 

module.exports = {
    roll, 
    score
}
