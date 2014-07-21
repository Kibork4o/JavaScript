var arr=[1, 2, 1, 15, 20, 5, 7, 31];
checkNumbers(arr);
var arr2=[2, 2, 2, 2, 2];
checkNumbers(arr2);
var arr3=[500, 1, -23, 0, -300, 28, 35, 12];
checkNumbers(arr3);
function checkNumbers(arr){
    console.log('Min -> ' + findMin(arr));
    console.log('Max -> ' + findMax(arr));
}
function findMin(arr){
    var malcho=arr[0];
    for(var j=0; j<arr.length; j++){
        if(arr[j]<malcho){
            malcho=arr[j];
        }
    }
    return malcho;
}
function findMax(arr){
    var malcho=arr[0];
    for(var j=0; j<arr.length; j++){
        if(arr[j]>malcho){
            malcho=arr[j];
        }
    }
    return malcho;
}