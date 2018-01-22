function sortArrayWithHoles(a) {
    var b = [];
    var index = 0;
    for (var i = 0; i < a.length; i++){
        if (a[i] != -1){
            b.push(a[i]);
        }
    }
    b.sort(function(a, b){return a-b})
    for (var i = 0; i < a.length; i++){
        if (a[i] != -1){
            a[i] = b[index];
            index++;
        }
    }
    return a;
}
var a = [-1, 190, 170, 120, -1, 150, -1, 180, 70];
console.log(sortArrayWithHoles(a));
