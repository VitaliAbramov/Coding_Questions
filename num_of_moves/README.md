# One swap for similar arrays
Given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

For inputArray = [1, 1, 1], the output should be
arrayChange(inputArray) = 3.

Input/Output
3 ≤ inputArray.length ≤ 105,
-105 ≤ inputArray[i] ≤ 105.

```sh
function similarArrays(a, b) {
    //code here
}

var a = [1,2,3];
vae b = [2,3,1];
console.log(similarArrays(a, b));
// the output should be true, swaping one time between 2 and 1 gives similar arrays.
```
