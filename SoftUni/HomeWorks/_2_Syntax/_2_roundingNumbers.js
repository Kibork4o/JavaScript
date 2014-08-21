console.log(roundNumber(22.7, 'floor'));
console.log(roundNumber(22.7, 'round'));
console.log(roundNumber(12.3, 'floor'));
console.log(roundNumber(12.3, 'round'));
console.log(roundNumber(58.7, 'floor'));
console.log(roundNumber(58.7, 'round'));
function roundNumber(value, which){
    var round=Math.round(value);
    var floor=Math.floor(value);
    switch(which){
        case 'round':
            return round;
        break;
        case 'floor':
            return floor;
        break;
    }
}
