// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/
// Given an integer array nums sorted in ^ order,
// return an array of the squares of each number
// sorted in non-decreasing order.
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function sortedSquares(nums: number[]) {
  let lp = 0;
  let rp = nums.length - 1;
  const resArr = new Array(nums.length);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[lp]) > nums[rp]) {
      resArr[i] = Math.abs(nums[lp]) ** 2;
      lp++;
    } else {
      resArr[i] = nums[rp] ** 2;
      rp--;
    }
  }

  return resArr;
}
