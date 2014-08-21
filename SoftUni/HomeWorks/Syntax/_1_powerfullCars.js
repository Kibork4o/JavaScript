var mnojitel=0.746;
function getHP(kW, mnojitel){
    var hp=kW/mnojitel;
    return hp.toFixed(2);
}
console.log(getHP(75, mnojitel));
console.log(getHP(150, mnojitel));
console.log(getHP(1000, mnojitel));
