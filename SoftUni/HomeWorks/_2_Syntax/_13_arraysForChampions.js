var years=[3, 5, 2, 7, 9];
var langs=['Java', 'Python', 'C#', 'JavaScript', 'Ruby'];
var cities=['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'];
var cars=['BMW', 'Audi', 'Lada', 'Skoda', 'Opel'];
console.log(getElements(years, langs, cities, cars));
function getElements(years, langs, cities, cars){
    var randYear=getTheRand(years);
    var randLang=getTheRand(langs);
    var randCity=getTheRand(cities);
    var randCar=getTheRand(cars);
    var result='You will work ' + randYear + ' years on ' + randLang + '.\n';
    result+='You will live in ' + randCity + ' and drive ' + randCar + '.';
    return result;
}
function getTheRand(arr){
    return arr[generateRand()];
}
function generateRand(){
    var randy=Math.floor(Math.random()*10);
    if(randy<5){
        return randy;
    }
    else{
        return Math.floor(randy/2);
    }
}