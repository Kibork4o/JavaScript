console.log(cilinderVolume(2, 4));
console.log(cilinderVolume(5, 8));
console.log(cilinderVolume(12, 3));
function cilinderVolume(radius, height){
    var volume=Math.PI*radius*radius*height;
    return volume;
}