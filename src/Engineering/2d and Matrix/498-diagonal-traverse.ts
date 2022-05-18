// 498. Diagonal Traverse
// https://leetcode.com/problems/diagonal-traverse/
// Given an m x n matrix mat, return an array of
// all the elements of the array in a diagonal order.

function findDiagonalOrder(mat: number[][]) {
  // because the diagonal pattern is in general [i+1][j-1]
  // i+0     --x--- shift j-0  :sum([0][2]) = 2
  // i+1    --x---  shift j-1  :sum([1][1]) = 2
  // i+1+1 --x---   shift j-1-1:sum([2][0]) = 2
  // all elements of the diagonal col should have similar sum
  // find all similar index sums in order to get all possible
  // diagonals from left-to-right
  // reverse each second row to get forth-and-back pattern

  const indexToDiagonal = new Map();
  for (let y = 0; y < mat.length; y++) {
    for (let x = 0; x < mat[y].length; x++) {
      const dSum = x + y;
      if (indexToDiagonal.has(dSum)) {
        const d = indexToDiagonal.get(dSum);
        d.push(mat[y][x]);
      } else {
        indexToDiagonal.set(dSum, [mat[y][x]]);
      }
    }
  }

  const result: number[] = [];
  indexToDiagonal.forEach((d, dSum) => {
    if (dSum % 2 === 0) {
      let l = 0;
      let r = d.length - 1;
      while (l < r) {
        const temp = d[l];
        d[l] = d[r];
        d[r] = temp;
        l++;
        r--;
      }
    }

    result.push(...d);
  });

  return result;
}
