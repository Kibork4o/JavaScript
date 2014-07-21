cardFriquency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
console.log('\n');
cardFriquency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
console.log('\n');
cardFriquency('10♣ 10♥');
function cardFriquency(string){
    //разделяме стринга на спейсове, като в момента отделните карти са със своите бои
    var cardsWithFace=string.split(' ');
    //създаваме си масив, в който ще събираме обработените карти (тези, които са без боята след тях)
    var cardsWithowtFace=[];
    //взимаме дъжината на ръката която имаме
    var handLength=cardsWithFace.length;
    //завъртаме, оформяме картите и зарейдаме оформените карти в масива, който сздаваме стази цел
    for(var i=0; i<handLength; i++){
        cardsWithowtFace[i]=smashTheFace(cardsWithFace[i]);
    }
    return collectFriquency(cardsWithowtFace, handLength);
}
//функция, премахваща боята след картата
function smashTheFace(card){
    //ако картата е десятка взимаме първите 2 символа
    if(card[0]==1){
        card=card.substring(0, 2);
    }
    //ако е коя да е друга взимаме първият символ
    else{
        card=card.substring(0, 1);
    }
    //връщаме
    return card.toLowerCase();
}
//функция, оформяща колко често се срещат съответните резултати
//като параметри даваме масива от карти и дължината му
function collectFriquency(arr, length){
    var friquencyArr=[];
    for(var j=0; j<length; j++){
        if(friquencyArr[arr[j]]==undefined){
            friquencyArr[arr[j]]=1;
        }
        else{
            friquencyArr[arr[j]]+=1;
        }
    }
    //със следната функция, пресмятаме срещането на каертите в тестето
    return mathFriquency(friquencyArr, length, arr);
}
//функция, пресмятаща колко често се срещат съответните карти
//като параметър се взема масива оформен в "collectFriquency", дължината на всичките карти и пътрвоначалният масив
function mathFriquency(arr, length, realArr){
    //зареждаме стойностите, в амсива, който ще принтираме
    for(var index in arr){
        arr[index]=(arr[index]/length)*100;
        arr[index]=arr[index].toFixed(2) + '%';
    }
    //подаваме готовият масив и първоначалният на функцията, която интерпретира по правилен начин резултатите
    return orderAndOutPut(arr, realArr);
}
//функция, спомагаща, за правилното подреждане на картите, за принтиране в конзолата
//Параметри: масивът, подготвен ,за принтиране, който съдържа за ключ картата, а за стойност, колко често се среща
//както и първоначалният масив с раздлени карти и из чистени от тях бои.
//тук просто завъртаме първоначалният масив (този в който просто сме разделили картрите и сме махнали боята от картата).
//завъртаме него във външният цикъл "for-in", а във вътрешният сравняваме всеки елемент на все още несортираният ни масив
//съдържащ за индекс съответната карта, а за стойност срещането й в ръката, която имаме
//по този начин улавяме реда, в който са ни дадени картите. След като сме принтирали някоя карта, правим стойността й "undefined",
//за да не бъркаме скрипта да тегли пак и пак нейната стойност, от която вече няма нужда.
function orderAndOutPut(unorderedArr, realArr){
    for(var i in realArr){
        for(var j in unorderedArr){
            if(realArr[i]==j && unorderedArr[j]!=undefined){
                console.log(j.toUpperCase() + ' -> ' + unorderedArr[j]);
                unorderedArr[j]=undefined;
            }
        }
    }
}