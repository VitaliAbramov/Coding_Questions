function rotateImage(a) {
    var b = [];
    for (var i = 0; i < a.length; i++){
        b[i] = [];
        var len = a.length-1;
        for (var j = 0; j < a.length; j++){            
            b[i][len] = a[j][i];
            len--;
        }
    }
    return b;
}
