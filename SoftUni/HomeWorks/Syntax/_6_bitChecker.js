console.log(showTheBits(333));
console.log(showTheBits(425));
console.log(showTheBits(2567564754));
function showTheBits(value){
    var bits=new Array();
    var counter=0;
    while(value>1){
        bits[counter]=Math.floor(value%2);
        value=Math.floor(value);
        Math.floor(value/=2);
        counter++;
    }
    if(extractBits(bits, counter)==1){
        return true;
    }
    return false;
}
function extractBits(arr, num){
    return arr[3];
}