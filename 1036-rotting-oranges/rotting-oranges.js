/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

    let n = grid.length;
    let m = grid[0].length;
    let count = 0;
    let k = 0;

    while (k < (n * m)) {
        let queue = [];

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (grid[i][j] === 2) {
                    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
                        queue.push([i - 1, j])
                    }
                    if (i + 1 < n && grid[i + 1][j] === 1) {
                        queue.push([i + 1, j])
                    }
                    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
                        queue.push([i, j - 1]);
                    }
                    if (j + 1 < m && grid[i][j + 1] === 1) {
                        queue.push([i, j + 1])
                    }
                }
            }
        }
        if (queue.length === 0) break;

        while (queue.length > 0) {
            let [ind1, ind2] = queue.shift();
            grid[ind1][ind2] = 2;
        }

        if (queue.length === 0) count++;
        k++;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }

    return count;
};