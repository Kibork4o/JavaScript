function whichIsTheNum(arr){
    var num=arr[1];
    var which=arr[0];
    var strNum=num + '';
    var realNum=shtaRegexna(strNum);
    var realLength=realNum.length;
    if(which>realLength){
        return 'The number doesn’t have ' + which + ' digits';
    }
    else if(which<1){
        return 'there aren\'t such numbers :)';
    }
    return sayIt(escapeNum(realNum, realLength, which));
}
function escapeNum(num, length, whichNum){
    return num[length-whichNum];
}
function shtaRegexna(num){
    var collectioner;
    var pattern=/\d+/g;
    var escapeNum='';
    while(collectioner=pattern.exec(num)){
        escapeNum+=collectioner[0];
    }
    return escapeNum;
}
function sayIt(num){
    switch(num){
        case '0':
            return 'zero';
            break;
        case '1':
            return 'one';
            break;
        case '2':
            return 'two';
            break;
        case '3':
            return 'three';
            break;
        case '4':
            return 'four';
            break;
        case '5':
            return 'five';
            break;
        case '6':
            return 'six';
            break;
        case '7':
            return 'seven';
            break;
        case '8':
            return 'eight';
            break;
        case '9':
            return 'nine';
            break;
    }
}
console.log(whichIsTheNum([1, 6]));
console.log(whichIsTheNum([2, -55]));
console.log(whichIsTheNum([6, 923456]));
console.log(whichIsTheNum([3, 1451.78]));
console.log(whichIsTheNum([6, 888.88]));
