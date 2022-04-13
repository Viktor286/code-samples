// Insertion-sort style for asc ordered array's new number insertion.
// could be used as a base for priority queue
// time complexity O(n) -- could be improved with binary search

function insertInAscSortedArr(arr: number[], insertNum: number) {
  if (!Array.isArray(arr) || typeof insertNum !== 'number') {
    return arr;
  }
  let inserted = false;
  for (let d = arr.length - 1; d >= 0; d--) {
    if (arr[d] < insertNum) {
      arr.splice(d + 1, 0, insertNum);
      inserted = true;
      break;
    }
  }

  if (!inserted) arr.unshift(insertNum);

  return arr;
}
