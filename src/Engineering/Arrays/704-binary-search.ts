// 704. Binary Search
// https://leetcode.com/problems/binary-search/
// implement binary search on sorted array

function binarySearch(nums: number[], target: number) {
  let left = 0;
  let right = nums.length-1;
  let mid;

  while(left <= right) {
    // mid = Math.floor((right+left) / 2);
    // mid = left + ((right - left) >> 1)
    mid = (left + right) >> 1

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}
