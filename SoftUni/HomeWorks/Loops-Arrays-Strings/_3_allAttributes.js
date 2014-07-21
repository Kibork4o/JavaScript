function allAttributes(){
    var getter=document.getElementsByTagName('*');
    var setter=document.getElementsByTagName('shower');
    setter.innerHTML=getter.value;
}
function doIt() {
    document.addEventListener("load", allAttributes);
}