// 289. Game of Life
// https://leetcode.com/problems/game-of-life/
// Given the current state of the m x n grid board,
// return the next state. (see rules via link above)

function gameOfLife(board: number[][]) {
  // setup adjacent direction arr
  // go through the matrix
  // leave coded state transition:
  // 0, 1, 2, 3
  // 0 -- was 0 will be 0 (0 % 0 = 0)
  // 1 -- was 1 will be 1 (1 % 2 = 1)
  // 2 -- was 1 will be 0 (2 % 2 = 0)
  // 3 -- was 0 will be 1 (3 % 2 = 1)
  const d = [
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
  ];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      let liveCells = 0;

      // Loop through neighbors
      for (let k = 0; k < d.length; k++) {
        if (
          x + d[k][0] < 0 ||
          x + d[k][0] >= board[y].length ||
          y + d[k][1] < 0 ||
          y + d[k][1] >= board.length
        ) {
          continue;
        }

        const neighbor = board[y + d[k][1]][x + d[k][0]];
        // count all that was 1 (was-1-will-be-1) and 2 (was-1-will-be-0)
        if (neighbor === 1 || neighbor === 2) liveCells++;
      }

      if (board[y][x] === 0 && liveCells === 3) board[y][x] = 3;
      if (board[y][x] === 1 && (liveCells < 2 || liveCells > 3)) board[y][x] = 2;
    }
  }

  // merge the state
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      board[y][x] = board[y][x] % 2; // reduce coded cells to final state
    }
  }
}
