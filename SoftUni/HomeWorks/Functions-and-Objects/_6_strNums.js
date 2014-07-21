function twoStringNums(arr){
    var num1=arr[0];
    var num2=arr[1];
    var string=num1 + " + " + num2;
    var result=eval(string);
    return eval(result);
}
console.log(twoStringNums(['123456789', '123456789']));
console.log(twoStringNums(['887987345974539','4582796427862587']));
console.log(twoStringNums(['347135713985789531798031509832579382573195807',
        '817651358763158761358796358971685973163314321']));
