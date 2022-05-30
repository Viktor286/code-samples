// 36. Valid Sudoku
// https://leetcode.com/problems/valid-sudoku/
// Determine if a 9 x 9 Sudoku board is valid.

function isValidSudoku(board: number[][] | '.'[][]) {
  const seenRows = new Set();
  const seenCols = new Set();
  const seenBlocks = new Set();

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const d = board[y][x];
      if (d !== '.') {
        const r = `${x}${d}`;
        const c = `${y}${d}`;
        const b = `${Math.floor(x / 3)}${Math.floor(y / 3)}${d}`;
        // Alt: compute the index of the box:
        // Math.floor(y/3) * 3 + Math.floor(x/3)

        if (seenRows.has(r) || seenCols.has(c) || seenBlocks.has(b)) {
          return false;
        }

        seenRows.add(r);
        seenCols.add(c);
        seenBlocks.add(b);
      }
    }
  }

  return true;
}
