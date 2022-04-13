// 1281. Subtract the Product and Sum of Digits of an Integer
// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
// Given an integer number n, return the difference between the product of its digits and the sum of its digits.

const subtractProductAndSum = function (n: number): number {
  let prod = 1;
  let sum = 0;

  while (n > 0) {
    prod *= n % 10;
    sum += n % 10;
    n = Math.trunc(n / 10);
  }

  return prod - sum;
};
