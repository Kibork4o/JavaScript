function twoStringNums(arr){
    var num1=arr[0];
    var num2=arr[1];
    return smqtaiString(num1, num2);
}
function smqtaiString(num1, num2){
    var length1=num1.length;
    var length2=num2.length;
    var bigger=length1>length2 ? length1 : length2;
    var ostatak=[];
    var currentSum;
    var allSum;
    var intResult=0;
    var doSum;
    for(var i=bigger- 1; i>=0; i--) {
        if(i==bigger-1){
            length1-=1;
            length2-=1;
        }
        doSum = parseInt(eval(num1[length1] + ' + ' + num2[length2]));
        if(doSum==10){
            ostatak[i - 1] = 1;
            currentSum = 0 + '';
        }
        else if(doSum>10){
            ostatak[i-1]=1;
            currentSum=doSum-10 + '';
        }
        else if (doSum < 10) {
            ostatak[i - 1] = 0;
            currentSum = doSum + '';
        }
        intResult = parseInt(doSum) + parseInt(ostatak[i]);
        if(num1[length1]==undefined){
            intResult=parseInt(num2[length2]) + parseInt(ostatak[i]);
            allSum = intResult + allSum;
        }
        else if(num2[length2]==undefined){
            intResult=parseInt(num1[length1]) + parseInt(ostatak[i]);
            allSum = intResult + allSum;
        }
        else if (i == bigger - 1) {
            intResult = parseInt(doSum);
            allSum=currentSum;
        }
        else {
            intResult = parseInt(currentSum) + parseInt(ostatak[i]);
            allSum = intResult + allSum;
        }
        length1-=1;
        length2-=1;
    }
    console.log(allSum);
}
twoStringNums(['123456789', '23456789']);
twoStringNums(['887987345974539', '4582796427862587']);
twoStringNums(['347135713985789531798031509832579382573195807', '817651358763158761358796358971685973163314321']);
