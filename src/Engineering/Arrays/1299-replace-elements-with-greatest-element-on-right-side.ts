// 1299. Replace Elements with Greatest Element on Right Side
// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// Given an array arr, replace every element in that array with the greatest
// element among the elements to its right, and replace the last element with -1.
// After doing so, return the array. Example:
// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]

// Instead of moving right to left and "closing window" we can "open window"
// from right to left:
// [1]6, [1,6]4, [1,6,4]5, [1,6,4,5]18, [1,6,4,5,18]17
// then we can recalc max between the last number at the window edge and new number.

const replaceElements = function (arr: number[]) {
  let max = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const el = arr[i];
    arr[i] = max;
    if (max < el) max = el;
  }

  return arr;
};
