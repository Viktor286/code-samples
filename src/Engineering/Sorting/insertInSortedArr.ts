// Insertion-sort style for ordered array's new number insertion
// time complexity O(n)

function insertInSortedArr(arr: number[], int: number) {
  let insertion = int;
  for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] < insertion) {
      const temp = arr[i];
      arr[i] = insertion;
      insertion = temp;
    }
  }

  return arr;
}
