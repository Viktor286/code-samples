// 48. Rotate Image
// https://leetcode.com/problems/rotate-image/
// You are given an n x n 2D matrix representing an image,
// rotate the image by 90 degrees (clockwise). in-place

// Transpose + reflect approach
function rotate(matrix: number[][]) {
  // Transpose (swap by diagonal,
  // with reduction of inner matrix by one on each step)
  for (let y = 0; y < matrix.length; y++) {
    for (let x = y + 1; x < matrix[y].length; x++) {
      const temp = matrix[y][x];
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }

  // flip horizontal
  for (let y = 0; y < matrix.length; y++) {
    let l = 0;
    let r = matrix[y].length - 1;
    while (l < r) {
      const temp = matrix[y][l];
      matrix[y][l] = matrix[y][r];
      matrix[y][r] = temp;
      l++;
      r--;
    }
  }

  return matrix;
}
