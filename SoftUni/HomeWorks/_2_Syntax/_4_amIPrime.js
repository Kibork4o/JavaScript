console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));
function isPrime(value){
    var koren=Math.sqrt(value);
    for(var i=2; i<koren; i++){
        if(value%i==0){
            return false;
        }
    }
    return true;
}