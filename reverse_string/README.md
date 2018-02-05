# Reverse string Parentheses
Given a string 's' that consists of English letters, punctuation marks, whitespace characters, and brackets. 
You should return the reverse strings contained in each pair of matching parentheses, starting from the innermost pair. 
The results string should not contain any parentheses.

- For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".
- For string s = "a(bcdefghijkl(mno)p)q", the output should be
reverseParentheses(s) = "apmnolkjihgfedcbq".
- For string s = "abc(cba)ab(bac)c", the output should be
reverseParentheses(s) = "abcabcabcabc".

A string consisting of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that parentheses form a regular bracket sequence. with length '5 ≤ s.length ≤ 55'.

```sh
function reverseStringParentheses(s) {
    // code here ...
}

var s = "a(bcdefghijkl(mno)p)q";
console.log(reverseStringParentheses(s));
// the output should be "apmnolkjihgfedcbq"
```
### Solution [here](./reverseStringParentheses.js)
