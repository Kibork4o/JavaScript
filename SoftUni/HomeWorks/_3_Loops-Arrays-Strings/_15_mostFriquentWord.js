console.log(friquentWord('in the middle of the night'));
console.log('\n');
console.log(friquentWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.'));
console.log('\n');
console.log(friquentWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.'));
function friquentWord(string){
    //разделяме отделните думи според празните пространства между тях, на стринга даден ни, като параметър
    var words=string.split(' ');
    var wordsCount=words.length;
    //създаваме си масив, в който събираме реултатите си
    var wordsArr=[];
    //изреждаме отделните думи една по една в цикъл, с дължинната на думите в изречението.
    for(var i=0; i<wordsCount; i++){
        //функцията "popComma" премахва пунктоационни знаци след думата, ако има останали такива при изрязването на думите
        var result=popComma(words[i]);
        //ако вече имаме тази дума в масива иувеличаваме повтаряемостта й с единица
        if(wordsArr[result]==undefined){
            wordsArr[result]=1;
        }
        //ако за първи път я срещаме, й придаваме стойност единица
        else{
            wordsArr[result]+=1;
        }
    }
    //интерпретираме събраните от нас резултати
    return whichAreTheMost(wordsArr);
}
function popComma(word){
    //създаваме си масив съдържащ азбуката, за да срваним последният символ, дали е равен на която и да е дума от азбуката
    var alphabetic=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //създаваме си булева променлива помощник
    var bool=true;
    //взимаме послддният знак на думата
    var lastSymbol=word[word.length-1];
    //завъртаме цикъл, с дължината на збуката, за да обходим всички нейни символи
    for(var j=0; j<alphabetic.length; j++){
        //ако последният символ е равен на коя да е буква от азбуката излизаме от масива и връщаме думата както си е
        if(lastSymbol!=alphabetic[j]){
            bool=false;
        }
        else{
            return word.toLowerCase();
        }
    }
    //ако не е равен на нито един символ от азбуката, трием последният символ и връщаме оформената дума
    if(bool==false){
        word=word.substr(0, word.length-1);
        return word.toLowerCase();
    }
}
//функция, оставяща ни само най - често срещащите се думи
function whichAreTheMost(arr){
    //променлива, в която събираме върнатите ни резултати
    var result='';
    //брояч, който отговаря за запълването на променливата "result"
    var counter=0;
    //разглеждаме отделните елементи на колекцията, която разглеждаме
    for(var index in arr){
        //при всяко завъртане придаваме стойноста на динамичният брояч
        var dinamicCounter=arr[index];
        //след което сравняваме динамичният брояч с основният
        //ако динамичният брояч е по - голям от основният, правим основният брояч, равен на динамичният
        //и запълваме "result" със стойност
        if(dinamicCounter>counter){
            counter=dinamicCounter;
            result=index + ' -> ' + arr[index];
        }
        //ако са равни допълваме "result" с допълнителна стойност(всички стойности които са еквивалентни на вече добавената)
        else if(dinamicCounter==counter && result!=''){
            result+='\n' + index + ' -> ' + arr[index];
        }
    }
    //връщаме резултата
    return result;
}