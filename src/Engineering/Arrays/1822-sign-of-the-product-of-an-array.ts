// https://leetcode.com/problems/sign-of-the-product-of-an-array/
// There is a function signFunc(x) that returns:
// 1 if x is positive.
// -1 if x is negative.
// 0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums.

function arraySign(nums: number[]): number {
  // use stack or variable to trace sign
  // check for at least one zero
  let isNegative = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      return 0;
    }

    if (nums[i] < 0) {
      isNegative = !isNegative;
    }
  }

  return isNegative ? -1 : 1;
}
