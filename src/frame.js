isSpare = (frame) => {
    if(frame) {
        return frame.roll1 + frame.roll2 === 10? true : false;
    }
        return false;
     
}

module.exports = {isSpare} 