reverseString('sample');
reverseString('softUni');
reverseString('java script');
function reverseString(string){
    var reversedArr=[];
    for(var i=0; i<string.length; i++){
        reversedArr[string.length - i - 1]=string[i];
    }
    console.log(reversedArr.join(''));
}