isSpare = (frame) => {
    if(frame && frame.roll1 !== 10) {
        return frame.roll1 + frame.roll2 === 10? true : false;
    }
        return false;    
}

isStrike = (frame) => { 
    return true;
}



module.exports = {isSpare, isStrike} 