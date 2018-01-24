function firstDuplicate(a) {
    var arr = [];
    for(var i = 0;i < a.length; i++){
        if(arr[a[i]] === 1){
            return a[i];
        }
        else {
            arr[a[i]]=1;
        }
    }
    return -1;
}