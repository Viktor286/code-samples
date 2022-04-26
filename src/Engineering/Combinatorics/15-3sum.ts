// 15. 3Sum
// https://leetcode.com/problems/3sum/
// Given an integer array nums,
// return all unique triplets which sums to 0

function threeSum(nums: number[]) {
  const target = 0;
  const n = nums.length;
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    const a = nums[i];
    let start = i + 1;
    let end = n - 1;

    while (start < end) {
      const b = nums[start];
      const c = nums[end];
      const sum = a + b + c;

      if (sum === target) {
        result.push([a, b, c]);

        while (nums[start] === nums[start + 1]) start++;
        while (nums[end] === nums[end - 1]) end--;
        start++;
        end--;
      } else if (sum > target) {
        end--;
      } else {
        start++;
      }
    }
  }

  return result;
}
