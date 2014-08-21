console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));
function evenNumber(value){
    if(value%2==0){
        return true;
    }
    return false;
}