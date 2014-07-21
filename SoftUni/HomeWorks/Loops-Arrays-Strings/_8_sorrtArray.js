var arr=[5, 4, 3, 2, 1];
console.log(sortArr(arr));
var arr2=[12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3];
console.log(sortArr(arr2));
function sortArr(arr){
    arr.sort(orderBy);
    return arr.join(', ');
}
function orderBy(firstNumber, secondNumber){
    return firstNumber-secondNumber;
}