function palindromeRearranging(inputString) {
    return check(inputString, 0);
}

function check(str, counter) {
    if(str.length == 1 && counter == 1)
        return false;
    
    if(str.length < 2) 
        return true;
    
    var prefix = str[0];
    var curr_len = str.length;
    str = str.replace(prefix, '').replace(prefix, '');
    if (curr_len - str.length < 2) {
        if (counter == 1)
            return false;
        else
            counter++;
    }
    return check(str, counter);
}