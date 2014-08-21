var arr1=['in', 'We are living in a yellow submarine.' +
    'We don\'t have anything else. Inside the submarine' +
    'is very tight. So we are drinking all the day.' +
    'We will move out of it in 5 days.'];
subStringCount(arr1);
var arr2=['your', 'No one heard a single word you said.' +
    'They should have seen it in your eyes.' +
    'What was going around your head.'];
subStringCount(arr2);
var arr3=['but', 'But you were living in another world tryin\'' +
    'to get your message through.'];

subStringCount(arr3);
function subStringCount(arr){
    var word=arr[0].toLowerCase();
    var text=arr[1].toLowerCase();
    var counter=0;
    for(var i=0; i<text.length; i++){
        if(text.substr(i, word.length)==word){
            counter+=1;
        }
    }
    console.log(counter);
}