# Rotate two-dimensional array 
Given an n x n 2D matrix array that represents an image. 
Rotate the image by 90 degrees (clockwise).
For a = 
[[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be a = 
[[7,4,1], 
 [8,5,2], 
 [9,6,3]]
 
 Input 
 - 1 ≤ a.length ≤ 100,
 - a[i].length = a.length,
 - 1 ≤ a[i][j] ≤ 104

```sh
function rotateImage(a) {
    // code here ...
}

var a = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(rotateImage(a));
// the output should be [[7,4,1],[8,5,2],[9,6,3]]
```
### Solution [here](./rotate2DArray.js)
