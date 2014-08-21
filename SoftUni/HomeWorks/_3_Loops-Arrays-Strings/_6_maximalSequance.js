arr1=[2, 1, 1, 2, 3, 3, 2, 2, 2, 1];
findTheMax(arr1);
arr2=['happy'];
findTheMax(arr2);
arr3=[2, 'qwe', 'qwe', 3, 3, '3'];
findTheMax(arr3);
function findTheMax(arr){
    var counter=1;
    var dinamicCounter=1;
    var ednakav="";
    for(var i=1; i<arr.length; i++) {
        if(arr[i]===arr[i-1]){
            dinamicCounter+=1;
        }
        if(arr[i]!==arr[i-1]){
            dinamicCounter=1;
        }
        if (dinamicCounter > counter || dinamicCounter == counter) {
            counter = dinamicCounter;
            ednakav = arr[i];
        }
    }
    if(counter==1){
        console.log('[' + arr[0] + ']');
        return;
    }
    resultGetter(counter, ednakav);
}
function resultGetter(num, digit){
    result="[";
    for(var j=0; j<num; j++){
        result+=digit;
        if(j!=num-1){
            result += ', ';
        }
        else{
            result +=']';
        }
    }
    console.log(result);
}