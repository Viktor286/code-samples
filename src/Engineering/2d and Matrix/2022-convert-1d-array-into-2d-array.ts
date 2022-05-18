// 2022. Convert 1D Array Into 2D Array
// https://leetcode.com/problems/convert-1d-array-into-2d-array/
// Return an m x n 2D array constructed from 1d array
// See the details via link above

function construct2DArray(original: number[], m: number, n: number) {
  const emptyMatrix: [] = []; // using naming to highlight requirement specifics
  if (!original || original.length !== m * n) return emptyMatrix;

  const matrix = new Array(m).fill(false).map(() => new Array(n).fill(undefined));

  let row = 0;
  let col = 0;

  for (let i = 0; i < original.length; i++) {
    if (col > n - 1) {
      row++;
      col = 0;
    }

    matrix[row][col] = original[i];
    col++;
  }

  return matrix;
}
