function compareStrings(s1, s2) {
    var counter = 0;
    var arrLen = s2.length;
    for (var i = 0; i < s1.length; i++){
        s2 = s2.replace(s1[i],'');
        
    }
    return arrLen - s2.length;
}
var s1 = "ddbzz", s2 = "dtzddym";
console.log(compareStrings(s1, s2));