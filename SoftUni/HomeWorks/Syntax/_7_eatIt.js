console.log(lifeTimeEating(38, 118, 0.5, 'chocolate'));
console.log(lifeTimeEating(20, 87, 2, 'fruits'));
console.log(lifeTimeEating(16, 102, 1.1, 'nuts'));
function lifeTimeEating(myAge, maxAge, numFood, whatFood){
    var years=maxAge-myAge;
    var days=years*365;
    var allFood=days*numFood;
    return allFood + ' kg of ' + whatFood + ' would be enough until I am ' + maxAge + ' years old.';
}