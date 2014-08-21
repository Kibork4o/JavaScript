var arr1=[3, 2, 3, 4, 2, 2, 4];
incrementation(arr1);
var arr2=[3, 5, 4, 6, 1, 2, 3, 6, 10, 32];
incrementation(arr2);
var arr3=[3, 2, 1];
incrementation(arr3);
function incrementation(arr){
    var counter=0;
    var dinamicCounter=0;
    var matrixCounter=0;
    var resultArr=[[]];
    for(var i=1; i<arr.length; i++){
        if(arr[i]>arr[i-1]){
            resultArr[[matrixCounter, dinamicCounter]]=arr[i-1];
            dinamicCounter+=1;
            resultArr[[matrixCounter, dinamicCounter]]=arr[i];
        }
        if(arr[i]<arr[i-1]){
            if(matrixCounter!=0) {
                matrixCounter += 1;
            }
            dinamicCounter=0;
        }
        if(dinamicCounter>counter){
            counter=dinamicCounter;
        }
    }
    longestOfThem(resultArr);
}
function longestOfThem(matrix){
    var i=0;
    var j=0;
    var firstIndexCounter=0;
    var secondIndexCounter=0;
    while(true){
        if(matrix[[i, j]]==undefined){
            break;
        }
        while(true){
            if(matrix[[i, j]]==undefined){
                break;
            }
            j++;
            if(j>secondIndexCounter){
                secondIndexCounter=j;
            }
        }
        i++;
        if(j==secondIndexCounter){
            firstIndexCounter=i;
        }
        j=0;
    }
    lastResult(matrix, firstIndexCounter, secondIndexCounter);
}
function lastResult(matrix, theI, theJ){
    var easyArr=[];
    for(var j=0; j<theJ; j++){
        easyArr[j]=matrix[[theI-1, j]];
    }
    if(easyArr[0]==undefined){
        console.log('no');
        return;
    }
    console.log(easyArr.join(', '));
}