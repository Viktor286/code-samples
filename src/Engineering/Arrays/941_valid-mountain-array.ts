// https://leetcode.com/problems/valid-mountain-array/
// Given an array of integers arr, return true if it is a valid mountain array.
// arr is a mountain array if and only if:
// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const validMountainArray = function (arr: number[]) {
  let l = 0;
  let r = arr.length - 1;

  while (l < arr.length - 1 && arr[l] < arr[l + 1]) {
    l++;
  }

  while (r > 0 && arr[r] < arr[r - 1]) {
    r--;
  }

  return l > 0 && r < arr.length - 1 && r === l;
};
