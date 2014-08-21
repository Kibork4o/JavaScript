console.log(replaceA('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>'));
function replaceA(string){
    var length=string.length;
    //с булевите промеливи следдим, върху коя част от текста точно сме
    //целият таг 'а'
    var aTagOpen=false;
    //атрибута 'href' на тага 'a'
    var hrefContentOpen=false;
    //стойността на 'а'
    var aValueOpen=false;
    //в слледните променливи стбъраме текстовата стойност за следните елементи на стринга, подаден ни, като параметър
    //стойността на атрибута 'href'
    var hrefValue='';
    //стоойността на 'а'
    var contentValue='';
    //стойността на текста отначалото на стринга подаден ни, като параметър, до отварящатра скоба на тага 'а'
    var fromBegin='';
    //стойността на стринга подаден ни, като параметър, от затварящата скоба на тага 'а', до края на стринга
    var toEnd='';
    //завъртаме цикъл с дъ;жината на стринга
    for(var i=0; i<length; i++){
        //когато подминем целият таг 'а'
        if(hrefValue!='' && aTagOpen==false){
            //събираме текста от края на стринга стринга след тага 'а'
            toEnd+=string[i];
        }
        //като задминем тага 'а' отбелязваме това, като даваме стройност 'false' на 'aTagOpen'
        if(string[i]=='>'
            && string[i-1]=='a'
            && string[i-2]=='/'
            && string[i-3]=='<'){
            aTagOpen=false;
        }
        //като сме върху така 'а' отбелязваме това, като даваме стойност 'true' на 'aTagOpen'
        if(string[i]=='<' && string[i+1]=='a'){
            aTagOpen=true;
        }
        //ако още не сме стъпили, върху тага 'а'
        if(hrefValue=='' && aTagOpen==false){
            //събираме стойността на текста, преди тага 'а'
            fromBegin+=string[i];
        }
        //ако сме подминали атрибута 'href' и стойността му, отбелязваме това, като даваме стойноста 'false' на hrefContentOpen
        if(aTagOpen==true && string[i]=='>'){
            hrefContentOpen=false;
        }
        //ако сме подминаи съдържанието на тага а, отбелязваме това, като придаваме стойноста 'false' на 'aValueOpen'
        if(aTagOpen==true && string[i]=='<'){
            aValueOpen=false;
        }
        //събираме съдържанието на атрибута хреф, когато сме върху него
        if(hrefContentOpen==true){
            hrefValue+=string[i];
        }
        //събираме съдържанието н тага 'а', когато сме върху него
        if(aValueOpen==true){
            contentValue+=string[i];
        }
        //отбелязваме, че започва съдържанието на тага 'а', като придаваме стойност 'true' на променливата aValueOpen
        if(aTagOpen==true && string[i]=='>'){
            aValueOpen=true;
        }
        //отбелязваме, че сме върху съдържанието на атрубута 'href', като придаваме стойност 'true' на променливата 'hrefContentOpen'
        if(aTagOpen==true && string[i]=='='){
            hrefContentOpen=true;
        }
    }
    //връщаме функцията коструктор, за да принтираме крайният резултат
    return construct(fromBegin, hrefValue, contentValue, toEnd);
}
//функция, сглобяваща, съставните части, които събирахме досега
//в нея няма нищо сложно и объркващо за обяснение
function construct(fromBegin, hrefValue, contentValue, toEnd){
    var lego='';
    lego+=fromBegin + '[URL=';
    lego+=hrefValue + ']';
    lego+=contentValue + '[/URL]';
    lego+=toEnd;
    return lego;
}