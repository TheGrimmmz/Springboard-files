function starOutGrid(grid) {
    const starIndices = []
    const numRows = grid.length;
    const numCols = grid[0].length

    for (let row=0; row < numRows; row++){
        for (let col = 0; col <numCols; col++){
            if(grid[row][col] === '*'){
                starIndices.push([row,col])
            }
        }
    }

    for (const [row, col] of starIndices) {
        for (let i=0; i < numCols; i++){
            grid[i][col] = '*'
        }
        for (let j = 0; j < numCols; j++) {
            grid[row][j] = '*'
        }
    }

    for (let row = 0; row < numRows; row++){
        for (let col = 0; col< numCols; col++){
            if (grid[row][col] === '*'){
                grid[row][col] = '*';
            }
        }
    }
    return grid;
}
