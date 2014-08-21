console.log(textModifier('We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. ' +
    'We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.'));
function textModifier(string){
    //масив, в който ще се съдържат, всички отделни части на текста, които са извън таговете
    var outColector=[];
    //променлива, която ще използваме, за определяне стойността на поредният елемент на съответният масив
    var outColectorWord='';
    //масив, в който ще се съдържат всички думи, които са измежду таговете
    var inColector=[];
    //променлива, която ще използваме, за определяне стойността на поредният елемент на съответният масив
    var inColectorWord='';
    //масив, в който ще се съдържа стойността на текста в таговете, за да можем в по - късен етап, да да променим изгледа на думите
    var whatAmIArr=[];
    //променлива, която ще използваме, за определяне стойността на поредният елемент на съответният масив
    var whatAmIStr='';
    //дъжината на масива параметър
    var length=string.length;
    //променлива, указваща дали сме върху таговете на някои от оградените парчета текст
    var insideTaggedText=false;
    //промелива, показваща дали сме върху съдържанието на текст, който е ограден от тагове
    var insideTaggedContent=false;
    //променлива, указваща, дали сме върху текста между скобите на някои таг
    var insideTag=false;
    for(var i=0; i<length; i+=1){
        //отстъпваме от тагван текст
        if(string[i]=='>' && string[i-7]=='/' && insideTaggedText==true ||
            string[i]=='>' && string[i-8]=='/' && insideTaggedText==true ||
            string[i]=='>' && string[i-9]=='/' && insideTaggedText==true){
            insideTaggedText=false;
        }
        //отстъпваме от първият таг
        if(string[i]=='>' && insideTag==true){
            insideTag=false;
        }
        //отстъпваме от съдържанието между таговете
        if(string[i]=='<' && string[i+1]=='/' && insideTaggedContent==true){
            insideTaggedContent=false;
        }
        //ако сме накрая на стринга н параметър
        if(string[i+1]==undefined){
            insideTag=false;
            insideTaggedContent=false;
            insideTaggedText=false;
        }
        //когато не сме върху тагове или текст, заобиколен от тагове улавяме следният текст и го затжаряме в масива приготвен за него
        if(insideTag==false && insideTaggedContent==false && insideTaggedText==false && string[i]!='<' && string[i]!='>'){
            outColectorWord+=string[i];
        }
        //когато отстъпваме от тетагнат текст и влизаме в тагнат
        if(insideTaggedText==true && string[i+1]=='<' || insideTaggedText==false && string[i]=='.' && string[i+1]==undefined){
            outColector.push(outColectorWord);
            outColectorWord='';
        }
        //когато сме върху отварящият таг от текста улавяме следният текст и го затжаряме в масива приготвен за него
        if(insideTag==true){
            whatAmIStr+=string[i];
        }
        //когато сме на затварящата скоба на отварящият таг
        if(insideTag==false && string[i+1]=='>'){
            whatAmIArr.push(whatAmIStr);
            whatAmIStr='';
        }
        //когато стъпим на съдържаниието между таговете улавяме следният текст и го затжаряме в масива приготвен за него
        if(insideTaggedContent==true){
            inColectorWord+=string[i];
        }
        if(string[i+1]=='<' && inColectorWord!=''){
            inColector.push(inColectorWord);
            inColectorWord='';
        }
        //стъпваме вурху таг
        if(string[i]=='<' && string[i+1]!='/' && insideTaggedText==false){
            insideTaggedText=true;
            insideTag=true;
        }
        //стъпваме, върху съдържанието на текста в тага
        if(string[i]=='>' && string[i-7]!='/' && string[i-8]!='/' && string[i-9]!='/' && insideTaggedText==true){
            insideTaggedContent=true;
        }
    }
    //изполозваме тази функция, за да сглобим, всичко, което въбирахме до сега
    return puzzle(outColector, whatAmIArr, inColector);
}
//функция, сглобяваща всичко събрано до тук
//Параметри:
//outTxt - текстът, който не е в таговете, tag - таговете, insideTag - съдържанието на текста в таговете
function puzzle(outTxt, tag, insideTag){
    //променливата, която ни връща желаният резултат
    var lego='';
    //дължината на това, което искаме да завъртим в цикъла
    var length=outTxt.length;
    for(var i=0; i<length; i++){
        lego+=ifDoesntDontShow(outTxt[i]) + '' + whatTag(ifDoesntDontShow(insideTag[i]), tag[i]);
    }
    return lego;
}
//функция, премахваща 'undefined' стойноасти, ако имаме такива
//параметър - me: съдърбжанието, което очакваме да ни бъде върнато
function ifDoesntDontShow(me){
    if(me==undefined){
        return '';
    }
    return me;
}
//функция, определяща кейсинга
//параметри:
//me - съдържанието което искаме да ни се върне в друг кейсинг
//tag - тагът, който имаме за съответното съдържание
function whatTag(me, tag){
    //ako imame sydyrvanie
    if(me!=undefined || me!=''){
        //следим стойността на тага
        switch(tag){
            case 'upcase':
                return me.toUpperCase();
            break;
            case 'lowcase':
                return me.toLowerCase();
            break;
            //в първите 2 стойности няма нищо сложно за обяснение.
            //тук в 'mixcase' разглеждаме всеки отделен символ на съдържанието в него и на случаен принцип му задаваме кейсинг
            case 'mixcase':
                var randValue='';
                //завъртане за да обходим всеки негов символ
                for(var j=0; j<me.length; j++){
                    //виждаме какъв случаен параметър сме получили, от функцията getRandCase()
                    //тйъ, като функцията връща число от 1 до 10, просто проверяваме дали се дели на 2 или не,
                    //за да отговеаря всеки път само на едното или само на другото и съптветно да напваим
                    //всяка отдлена буква или голяма или малка
                    switch(getRandCase()%2){
                        case 0:
                            randValue+=me[j].toUpperCase();
                            break;
                        case 1:
                            randValue+=me[j].toLowerCase();
                            break;
                    }
                }
                return randValue;
            break;
        }
    }
    return me;
}
//функция, генерираща случайно число от 1 до 10
function getRandCase(){
    var randCase=Math.random();
    randCase=Math.floor(randCase*10);
    return randCase;
}