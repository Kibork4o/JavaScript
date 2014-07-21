arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arrayBuilder(arr);
function arrayBuilder(arr){
    for(var i=1; i<arr.length; i++){
        console.log(i*5);
    }
}