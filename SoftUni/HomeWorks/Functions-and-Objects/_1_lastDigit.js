function numChecker(number){
    var checkNum=number + '';
    var lastNum=checkNum[checkNum.length-1];
    return sayIt(lastNum);
}
function sayIt(num){
    switch(num){
        case '0':
            return 'zero';
        break;
        case '1':
            return 'one';
        break;
        case '2':
            return 'two';
        break;
        case '3':
            return 'three';
        break;
        case '4':
            return 'four';
        break;
        case '5':
            return 'five';
        break;
        case '6':
            return 'six';
        break;
        case '7':
            return 'seven';
        break;
        case '8':
            return 'eight';
        break;
        case '9':
            return 'nine';
        break;
    }
}
console.log(numChecker(6));
console.log(numChecker(-55));
console.log(numChecker(133));
console.log(numChecker(14567));
