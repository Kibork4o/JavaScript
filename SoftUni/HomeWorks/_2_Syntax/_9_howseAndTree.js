var a=3, b=2;
console.log(
    theBigger(
        smetniHowse(a, b),
        smetniTree(a, b)
    )
);
function theBigger(howse, tree){
    if(howse>tree){
        console.log(howse);
        return 'howse';
    }
    console.log(tree);
    return 'tree';
}
function smetniHowse(a, b){
    var howse=a * a + (a * (a * 2 / 3)) / 2;
    return howse.toFixed(2);
}
function smetniTree(a, b){
    var tree=b * (b / 3) + Math.PI * (b * 2 / 3) * (b * 2 / 3);
    return tree.toFixed(2);
}