// 1295. Find Numbers with Even Number of Digits
// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
// Given an array nums of integers, return
// how many of them contain an even number of digits.

function findNumbers(nums: number[]) {
  // Math approach
  function getNumOfDigits(num: number) {
    return Math.floor(Math.log10(num)) + 1;
  }
  // Iterative approach
  function _getNumOfDigits(num: number) {
    let d = 0;
    while (num >= 1) {
      d++;
      num = num / 10;
    }
    return d;
  }

  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (getNumOfDigits(nums[i]) % 2 === 0) {
      result++;
    }
  }

  return result;
}
