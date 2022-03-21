// Given an integer array nums, return the third distinct maximum number in this array.
// If the third maximum does not exist, return the maximum number.
// Input: nums = [3,2,1]
// Output: 1

function thirdMax(nums: number[]) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];

    if (
      current === firstMax ||
      current === secondMax ||
      current === thirdMax
    ) {
      continue;
    }

    if (current > firstMax) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = current;
    } else if (current > secondMax) {
      thirdMax = secondMax;
      secondMax = current;
    } else if (current > thirdMax) {
      thirdMax = current;
    }
  }

  if (thirdMax !== -Infinity)
    return thirdMax;

  return firstMax;
}
