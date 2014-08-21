function extractHTML(string){
    var length=string.length;
    var writing=false;
    var result='';
    for(var i=0; i<length; i+=1){
        if(string[i]=='<'){
            writing=false;
        }
        if(writing==true){
            result+=string[i];
        }
        if(string[i]=='>'){
            writing=true;
        }
    }
    console.log(result);
}
extractHTML('\<p>Hello</p><a href=\'http://w3c.org\'>W3C</a>');