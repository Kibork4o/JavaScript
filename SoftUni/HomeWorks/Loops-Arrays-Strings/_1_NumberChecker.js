console.log(checkNums(20));
console.log(checkNums(1));
console.log(checkNums(13));
function checkNums(n){
    var nums=[];
    var counter=0;
    for(var i=2; i<=n; i++){
        if(i%4!=0 && i%5!=0){
            nums[counter]=i;
            counter++;
        }
    }
    return returnArr(nums);
}
function returnArr(arr){
    var num=arr.length;
    var result="";
    for(var j=0; j<num; j++){
        result+=arr[j];
        if(j!=num-1){
            result+=', ';
        }
    }
    if(result.length>2) {
        return result;
    }
    return 'no';
}