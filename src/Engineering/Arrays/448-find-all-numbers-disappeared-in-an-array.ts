// Given an array nums of n integers where nums[i] is in the range [1, n],
// return an array of all the integers in the range [1, n] that do not appear in nums.
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

function findDisappearedNumbers(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    const indexTarget = Math.abs(nums[i]) - 1;
    nums[indexTarget] = nums[indexTarget] < 0 ? nums[indexTarget] : nums[indexTarget] * -1;
  }

  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) result.push(i + 1);
  }

  return result;
}
