// 167. Two Sum II - Input Array Is Sorted
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

function twoSum(n: number[], target: number): number[] {
  let j = n.length - 1;
  for (let i = 0; i < j; ) {
    const sum = n[i] + n[j];
    if (sum === target) {
      return [i + 1, j + 1];
    } else {
      if (sum > target) {
        j--;
      } else {
        i++;
      }
    }
  }
}
