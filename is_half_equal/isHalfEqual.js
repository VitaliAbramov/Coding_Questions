function isHalfEqual(n) {
    var l = 10;
    if (n > 1000) {
        l = 100;
    }
    if (n > 100000) {
        l = 1000;
    }    
    return sumNum(Math.floor(n / l), 0) == sumNum(n % l, 0); 
}
function sumNum(n, s){
    if (n == 0){
        return s;
    }
    s += n % 10;
    return sumNum(Math.floor(n / 10), s);
}
var n = 5326
console.log(isHalfEqual(n));