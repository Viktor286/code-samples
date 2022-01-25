// https://leetcode.com/problems/find-pivot-index/
// The pivot index is the index where the sum of all the numbers strictly to the left of the index
// is equal to the sum of all the numbers strictly to the index's right.
/**
 * @param {number[]} nums
 * @return {number}
 */
export function pivotIndex(nums: number[]) {
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum += nums[i];
  }

  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === rightSum - nums[i]) {
      return i;
    }

    rightSum -= nums[i];
    leftSum += nums[i];
  }

  return -1;
}
