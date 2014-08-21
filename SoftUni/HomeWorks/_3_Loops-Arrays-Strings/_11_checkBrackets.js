console.log(checkBrackets('( ( a + b ) / 5 – d )'));
console.log(checkBrackets(') ( a + b ) )'));
console.log(checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )'));
function checkBrackets(string){
    var opens=0;
    var closeds=0;
    var openCloseChecker=0;
    for(var i=0; i<string.length; i++){
        if(string[0]==')'){
            return 'incorrect';
        }
        if(string[string.length-1]=='('){
            return 'correct';
        }
        if(string[i]=='(' && string[i+1]==')' || string[i]==')' && string[i+1]=='('){
            return 'incorrect';
        }
        if(string[i]=='('){
            opens+=1;
        }
        if(string[i]==')'){
            closeds+=1;
        }
        openCloseChecker=opens-closeds;

    }
    if(openCloseChecker!=0){
        return 'incorrect';
    }
    else{
        return 'correct';
    }
}