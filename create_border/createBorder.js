function addBorder(picture) {
    var arr = [];
    var str = '*';
    for (var i = 0; i < picture.length; i++){
        arr.push('*' + picture[i] + '*');
    }
    str = str.repeat(arr[0].length);
    arr.push(str);
    arr.unshift(str);
    return arr;
}
