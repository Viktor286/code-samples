// 200. Number of Islands
// https://leetcode.com/problems/number-of-islands/
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

function numIslands(grid: string[][]) {
  const m = grid[0].length;
  const n = grid.length;

  let count = 0;
  const dir = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === '1') {
        count++;

        const queue = [[i, j]];

        while (queue.length > 0) {
          const [y, x] = queue.shift();
          grid[y][x] = '0';

          for (let k = 0; k < dir.length; k++) {
            const nextX = x + dir[k][0];
            const nextY = y + dir[k][1];

            if (nextX >= 0 && nextX < m && nextY >= 0 && nextY < n && grid[nextY][nextX] === '1') {
              queue.push([nextY, nextX]);

              // why there is a loop without it?
              grid[nextY][nextX] = '0';
            }
          }
        }
      }
    }
  }

  return count;
}
