// 1091. Shortest Path in Binary Matrix
// https://leetcode.com/problems/shortest-path-in-binary-matrix/
// Given an n x n binary matrix grid, return the length of
// the shortest clear path in the matrix.
// If there is no clear path, return -1.

function shortestPathBinaryMatrix(grid: number[][]) {
  const m = grid.length;
  const n = grid[0].length;

  if (grid.length < 1 || grid[0][0] !== 0 || grid[m - 1][n - 1] !== 0) return -1;

  const dir = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];

  const queue = [[0, 0]]; // [y,x]
  const visited = new Array(m).fill(undefined).map(e => new Array(n).fill(false));

  visited[0][0] = true;
  let path = 0;

  while (queue.length > 0) {
    let levelCount = queue.length;

    while (levelCount > 0) {
      const [y, x] = queue.shift();

      if (y === m - 1 && x === n - 1) return ++path;

      dir.forEach(d => {
        const _y = y + d[0];
        const _x = x + d[1];

        if (
          _y >= 0 && _y < m && _x >= 0 && _x < n &&
          grid[_y][_x] === 0 &&
          visited[_y][_x] !== true
        ) {
          queue.push([_y, _x]);
          visited[_y][_x] = true;
        }
      });

      levelCount--;
    }

    path++;
  }

  return -1;
}
