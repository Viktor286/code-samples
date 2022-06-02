// 867. Transpose Matrix
// https://leetcode.com/problems/transpose-matrix/
// Given a 2D integer array matrix, return the transpose of matrix.

function transpose(matrix: number[][]) {
  const n = matrix.length;
  const m = matrix[0].length;

  const tMatrix = new Array(m).fill('').map(() => new Array(n));

  for(let y = 0; y < tMatrix.length; y++) {
    for(let x = 0; x < tMatrix[0].length; x++) {
      tMatrix[y][x] = matrix[x][y];
    }
  }

  return tMatrix;
}
