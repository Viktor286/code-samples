// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/
// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest
// sum and return its sum.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

function maxSubArray(nums: number[]) {
  let sum = 0;
  let maxSum = -Infinity;

  for (let i=0; i < nums.length; i++) {
    // sum += nums[i]
    // maxSum = Math.max(sum, maxSum);
    // if (sum < 0) sum = 0;

    sum = Math.max(sum + nums[i], nums[i])
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}
