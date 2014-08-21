var name='Mitko';
var age=22;
var isMale=true;
var arr=['orange', 'banana', 'mango'];
console.log(someParameters(name, age, isMale, arr));
function someParameters(name, age, isMale, arr){
    var beforeArray='My name: ' + name + '\n';
    beforeArray+='My age: ' + age + '\n';
    beforeArray+='I am male: ' + isMale + '\n';
    beforeArray+='My favorite fruits are: ';
    beforeArray+=extractArr(arr);
    return beforeArray;
}
function extractArr(arr){
    var extractor=arr[0] + ', ' + arr[1] + ', ' + arr[2];
    return extractor;
}