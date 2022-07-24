// 74. Search a 2D Matrix
// Write an efficient algorithm that searches
// for a value target in an m x n integer matrix
// which is sorted from left to right.
// Output boolean for the result.

function searchMatrix(matrix: number[][], target: number) {
  const m = matrix.length;
  const n = matrix[0].length;

  let l = 0;
  let r = m * n - 1;

  while (l <= r) {
    const mid = l + ((r - l) >> 1);
    // Because division is partitioning:
    const partitionNumber = Math.floor(mid / n);
    // Select position as if we went through
    // previous partitions coming back to 0 after the end
    const partitionInnerPosition = mid % n;
    const adjustedValue = matrix[partitionNumber][partitionInnerPosition];

    if (adjustedValue === target) {
      return true; // don't forget return type
    }

    if (target > adjustedValue) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return false;
}
