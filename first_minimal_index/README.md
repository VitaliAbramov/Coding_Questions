# First Duplicate with minimal index.
Given an array a that contains only numbers in the range from 1 to 100000, 
find the first duplicate number for which the second occurrence has the minimal index.
If the array does not countian duplicate numbers the output will be -1.
For a = [4, 3, 6, 1, 5, 2, 6, 4], the output should be
firstMinimalIndex(a) = 6.
For a = [9, 17, 36, 75, 41, 6], the output should be
firstMinimalIndex(a) = -1.
```sh
function firstMinimalIndex(a) {
    // code here ...
}

var a = [4, 3, 6, 1, 5, 2, 6, 4]
console.log(firstMinimalIndex(a));
// the output should be 6 (6 is the duplicate number for which the second occurrence has the minimal index)
```
### Solution [here](./firstMinimalIndex.js)
