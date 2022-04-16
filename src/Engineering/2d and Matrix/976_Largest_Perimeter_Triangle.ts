// https://leetcode.com/problems/largest-perimeter-triangle/
// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
// formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
// Input: nums = [2,1,2]
// Output: 5

function largestPerimeter(nums: number[]): boolean | number {
  const sortedNums = nums.sort((a, b) => b - a);
  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] < sortedNums[i + 1] + sortedNums[i + 2]) {
      return sortedNums[i] + sortedNums[i + 1] + sortedNums[i + 2];
    }
  }
  return false;
}
