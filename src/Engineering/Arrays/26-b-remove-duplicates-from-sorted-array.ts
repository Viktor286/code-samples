// 26. Remove Duplicates from Sorted Array
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// Two pointers, count duplicates and calc index for unique element
// as formula: numberOfSteps "i" - numberOfDuplicate "d"
// e.g. we "shift left" "i" on a "d" number of duplicates
// u = i - d; A[u] = A[i]
function removeDuplicates(nums: number[]) {
  let duplicates = 0;
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];
    const prev = nums[i - 1];

    if (current === prev) {
      duplicates++;
      continue; // explicit but unnecessary as the last statement in a loop
    } else {
      const nextIndexWithoutDuplicates = i - duplicates;
      nums[nextIndexWithoutDuplicates] = current;
    }
  }

  return nums.length - duplicates; // k = len - dups
}
