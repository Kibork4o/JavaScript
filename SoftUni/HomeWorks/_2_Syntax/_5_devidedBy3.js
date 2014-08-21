console.log(devidedBy3(12));
console.log(devidedBy3(188));
console.log(devidedBy3(591));
function devidedBy3(value){
    if(sumTheNum(value)%3==0){
        return 'the number is divided by 3 without remainder';
    }
    return 'the number is not divided by 3 without remainder';
}
function sumTheNum(value){
    var toString='' + value;
    var result=0;
    for(var i=0; i<toString.length; i++){
        result+=parseInt(toString[i]);
    }
    return parseInt(result);
}