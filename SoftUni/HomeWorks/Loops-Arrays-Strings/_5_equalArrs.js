arr1=['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
arr2=['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'];
console.log(areEqual(arr1, arr2));
arr1=['3', '5', 'g', 'd'];
arr2=['5', '3', 'g', 'd'];
console.log(areEqual(arr1, arr2));
arr1=['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'];
arr2=['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r'];
console.log(areEqual(arr1, arr2));
function areEqual(arr1, arr2){
    if(arr1.length!=arr2.length){
        return 'Not Equal';
    }
    for(var i=0; i<arr1.length; i++){
        if(arr1[i]!=arr2[i]){
            return 'Not Equal';
        }
    }
    return 'Equal';
}