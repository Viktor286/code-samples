// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target,
// return indices of the two numbers
// such that they add up to target.
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums: number[], target: number) {
  const map = new Map();
  let result: number[] = [];

  for(let i=0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      result = [i, map.get(target - nums[i])]
    } else {
      map.set(nums[i], i)
    }
  }

  return result;
}
