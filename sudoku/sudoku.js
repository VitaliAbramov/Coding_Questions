function sudoku2(grid) {
    for( var i = 0; i < grid.length; i++){
        var arr =[];
        for ( var j = 0; j < grid.length; j++){
            arr.push(grid[j][i]);
        }
        if (check(arr) == false) return false;
        if (check(grid[i]) == false) return false;        
    }
    for (var i = 0; i < grid.length; i += 3) {
        
        for (var j = 0; j < grid.length; j += 3) {
            var arr = [];
            arr.push(grid[i][j], 
                     grid[i][j+1], 
                     grid[i][j+2],
                     grid[i+1][j],
                     grid[i+1][j+1],
                     grid[i+1][j+2],
                     grid[i+2][j],
                     grid[i+2][j+1],
                     grid[i+2][j+2]);
            // console.log('checking square i=:', i, 'j=',j);
            // console.log(arr);
            if (check(arr) == false) return false;
        }        
    }  
    return true;
}

function check(arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == '.') continue;
        if ((arr.slice(i+1).indexOf(arr[i]) != -1)) return false;
    }
    return true
}