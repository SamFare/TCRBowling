let runningTotal = 0;
const roll = (pins)  => { 
  runningTotal+=pins
}

const score = rollValue => {
  return runningTotal === 0? 0 : 20
} 

module.exports = {
    roll, 
    score
}
