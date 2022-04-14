// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements
// should be kept the same.
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// two pointers, count index of unique, apply when see unique
// (start from index 1, assume index 0 is first unique)
function removeDuplicatesCountUnique(nums: number[]) {
  if (nums.length == 0) return 0;

  let unique = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[unique]) {
      unique++;
      nums[unique] = nums[i];
    }
  }

  return unique + 1; // index to count
}

// same approach, but start with 0, increment after assignment
function removeDuplicatesCountUniqueAlt(nums: number[]) {
  let unique = 0;
  for (let i = 0; i < nums.length; i++) {
    if (unique === 0 || nums[i] != nums[i - 1]) {
      nums[unique] = nums[i];
      unique++;
    }
  }

  return unique; // index to count
}
