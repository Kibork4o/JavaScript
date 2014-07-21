function intAndArr(num, arr){
    var arrLength=arr.length-1;
    if(num<0 || num>arrLength){
        return 'No such index';
    }
    return biggerSmallerOrElse(num, arr, arrLength);
}
function biggerSmallerOrElse(num, arr, length){
    if(num==0 || num==length){
        return 'Only one neighbor';
    }
    else if(arr[num]>arr[num-1] && arr[num]>arr[num+1]){
        return 'Bigger than neighbors';
    }
    else{
        return 'No bigger than neighbors';
    }
}
console.log(intAndArr(2, [1, 2, 3, 3, 5 ]));
console.log(intAndArr(2, [1, 2, 5, 3, 4 ]));
console.log(intAndArr(5, [1, 2, 5, 3, 4 ]));
console.log(intAndArr(0, [1, 2, 5, 3, 4 ]));
