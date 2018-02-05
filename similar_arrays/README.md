# One swap
Given two arrays a and b, check whether they are similar.
The arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
similarArrays(a, b) = true.
The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
similarArrays(a, b) = true.
We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
similarArrays(a, b) = false.
Any swap of any two elements either in a or in b won't make a and b equal.

Input/Output
3 ≤ a.length ≤ 105,
1 ≤ a[i] ≤ 1000.

Array of integers of the same length as a.

```sh
function similarArrays(a, b) {
    //code here
}

var a = [1,2,3];
vae b = [2,3,1];
console.log(similarArrays(a, b));
// the output should be true, swaping one time between 2 and 1 gives similar arrays.
```
### Solution [here](./similarArrays.js)
