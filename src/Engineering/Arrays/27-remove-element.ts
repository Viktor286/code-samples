// 27. Remove Element
// https://leetcode.com/problems/remove-element/
// remove all occurrences of val in nums in-place
// Input: nums = [3,2,2,3], val = 3; Output: 2, nums = [2,2,_,_]
// Input: nums = [0,1,2,2,3,0,4,2], val = 2;
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// [0,1,2,2,3,0,4,2], 2
function removeElement(nums: number[], val: number) {
  let i = 0;
  let j = 0;

  while (i < nums.length && j < nums.length) {
    if (nums[j] === val) {
      while (nums[j] === val) {
        j++;
      }
    }

    nums[i] = nums[j];

    j++;
    if (nums[i] !== undefined) i++;
  }

  return i;
}
