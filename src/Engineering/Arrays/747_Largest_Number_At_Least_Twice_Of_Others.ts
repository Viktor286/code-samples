// https://leetcode.com/problems/largest-number-at-least-twice-of-others/
// whether the largest element in the array is at least twice as much as every other number in the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
export function dominantIndex(nums: number[]) {
  let maxIdx = -1;
  let maxValue = -Infinity;
  let secondMax = -Infinity;

  for (let i=0; i < nums.length; i++) {
    if (nums[i] > maxValue) {
      secondMax = maxValue;
      maxValue = nums[i];
      maxIdx = i;
    } else if (nums[i] > secondMax) {
      secondMax = nums[i];
    }
  }

  return maxValue >= secondMax * 2 ? maxIdx : -1;
}
