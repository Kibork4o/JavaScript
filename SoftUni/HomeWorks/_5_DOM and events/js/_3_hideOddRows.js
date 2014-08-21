function hideOdd(){
    var table=document.getElementsByTagName('table')[0];
    var rows=table.getElementsByTagName('tr');
    for(var i=0; i<rows.length; i++){
        table.rows[i].remove();
    }
}
function clickToHide() {
    var button = document.getElementById('btnHideOddRows');
    button.addEventListener('click', function () {
        hideOdd()
    });
}