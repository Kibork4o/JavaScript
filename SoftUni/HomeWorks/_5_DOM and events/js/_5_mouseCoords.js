function mouseCoords(e){
    var date=new Date();
    var X=e.pageX;
    var Y=e.pageY;
    var mouseHolder=document.getElementsByClassName('mouseHolder')[0];
    mouseHolder.innerHTML='X:' + X + ' Time: ' + date + '\n' + 'Y:' + Y + ' Time: ' + date;
}