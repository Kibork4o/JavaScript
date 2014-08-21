console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
function checkDigit(digit){
    if(parseInt((digit/100)%10)==3){
        return true;
    }
    return false;
}