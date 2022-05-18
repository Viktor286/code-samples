// 1. Two Sum
// https://leetcode.com/problems/two-sum/
// Given an array of integers nums and an integer target,
// return indices of the two numbers
// such that they add up to target.
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

function twoSum(nums: number[], target: number) {
  const termToIndex = new Map();

  for (let i = 0; i < nums.length; i++) {
    const knownTerm = nums[i];
    const secondTerm = target - knownTerm;
    if (termToIndex.has(secondTerm)) {
      return [termToIndex.get(secondTerm), i];
    } else {
      termToIndex.set(knownTerm, i);
    }
  }
}
