// 1089. Duplicate Zeros
// https://leetcode.com/problems/duplicate-zeros/
// Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
// Note that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.
// Input: arr = [1,0,2,3,0,4,5,0]
// Output: [1,0,0,2,3,0,0,4],5,0,0

function duplicateZeros(arr: number[]) {
  const last = arr.length - 1;
  const zerosShift = arr.reduce((a, n) => (n === 0 ? ++a : a), 0);
  let rightWrite = last + zerosShift;

  for (let leftRead = last; leftRead >= 0; leftRead--) {
    if (arr[leftRead] === 0) {
      if (rightWrite <= last) arr[rightWrite] = 0;
      --rightWrite;
    }

    if (rightWrite <= last) arr[rightWrite] = arr[leftRead];
    --rightWrite;
  }
}
