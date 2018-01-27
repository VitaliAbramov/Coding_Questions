function reverseParentheses(s) {
    result = '';
    for (var i = 0; i < s.length; i++){
        if(s[i] == '('){
            var end = 1;
            for (var j = i + 1;j < s.length; j++){
                if (s[j] == '('){
                    end++;
                }
                else if (s[j] == ')') {
                    end--;
                    if (end == 0){
                        result += reverse(s.substring(i + 1,j));
                        i = j;
                        break;
                    }
                }
            }
        }
        else {
            result += s[i];
        }
    }
    if (result.indexOf('(') > -1){
        return reverseParentheses(result);
    }
    return result;
}

function reverse(str) {
    var res = '';
    for (var i = str.length - 1; i >= 0; i--){
        if(str[i] == '('){
            res += ')';
        }
        else if (str[i] == ')'){
            res += '(';
        }
        else{
            res += str[i];
        }
    }
    return res;
}