function getTheVal(){
    var val=document.getElementById('input');
    var result=val.value;
    return result;
}
function writeIt(text){
    var container=document.getElementById('output');
    container.innerHTML=eval(text);
}
function eventListener() {
    var button = document.getElementById('evalResult');
    button.addEventListener("click", function () {
        writeIt(getTheVal());
    });
}