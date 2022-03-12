// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/
// Given an array arr, replace every element in that array with the greatest
// element among the elements to its right, and replace the last element with -1.
// After doing so, return the array. Example: [17,18,5,4,6,1]

const replaceElements = function(arr: number[]) {
  let max = -1;
  for(let i= arr.length-1; i >= 0; i--) {
    const el = arr[i];
    arr[i] = max;
    if (max < el) max = el;
  }

  return arr;
};
