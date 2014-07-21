function getWords(string){
    var separatedWords=string.split(' ');
    var outputArr=[];
    var length=separatedWords.length;
    for(var i=0; i<length; i++){
        outputArr[i]='';
        for(var j=separatedWords[i].length-1; j>=0; j--){
            outputArr[i]+=separatedWords[i][j];
        }
    }
    return outputArr.join(' ');
}
console.log(getWords('Hello, how are you.'));
console.log(getWords('Life is pretty good isn’t it?'));
