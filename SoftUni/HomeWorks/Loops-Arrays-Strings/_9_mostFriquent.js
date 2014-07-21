var arr1=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
console.log(mostFriquent(arr1));
var arr2=[2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1];
console.log(mostFriquent(arr2));
var arr3=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(mostFriquent(arr3));
function mostFriquent(arr){
    var matrix=[];
    for(var i=0; i<arr.length; i++){
        if(matrix[arr[i]]==undefined){
            matrix[arr[i]]=1;
        }
        else{
            matrix[arr[i]]+=1;
        }
    }
    return getArrs(matrix);
}
function getArrs(matrix){
    var counter=0;
    var biggestIndex=0
    for(var index in matrix){
        var dinamicCounter=matrix[index];
        if(dinamicCounter>counter && dinamicCounter > biggestIndex){
            counter=index;
        }
        if(dinamicCounter>biggestIndex){
            biggestIndex=dinamicCounter;
        }
    }
    return counter;
}