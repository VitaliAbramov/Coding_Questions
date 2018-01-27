function similarArrays(a, b){
    var counter = 0;
    var diff1 = 0;
    var diff2 = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            diff1 = a[i];
            diff2 = b[i];
            if(counter == 1) {
                if((a[i] != diff2) || (b[i] != diff1)){
                    return false;
                }else{
                    counter++;
                    continue;
                }
            }
            counter++;
            if(counter > 1) return false;
        }
    }
    return true;
}
