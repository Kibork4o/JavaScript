function digits(e){
    switch(e.charCode){
        case 48:
            return true;
            break;
        case 49:
            return true;
            break;
        case 50:
            return true;
            break;
        case 51:
            return true;
            break;
        case 52:
            return true;
            break;
        case 53:
            return true;
            break;
        case 54:
            return true;
            break;
        case 55:
            return true;
            break;
        case 56:
            return true;
            break;
        case 57:
            return true;
            break;
        default:
            return false;
    }
}
function whichDigit(e){
    if(digits(e)==false){
        banField();
    }
}
function banField(){
    var field=document.getElementById('field');
    field.setAttribute('disabled', 'disabled');
    field.style.background='red';
}