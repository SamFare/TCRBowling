isSpare = ({roll1, roll2}) => {
    return roll1 + roll2 === 10? true : false; 
}

module.exports = {isSpare} 