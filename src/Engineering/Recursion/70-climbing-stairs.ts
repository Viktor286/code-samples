// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?

const memo = new Map();
function climbStairs(n: number) {
  if (n <= 1) return 1;

  if (!memo.has(n)) memo.set(n, climbStairs(n - 1) + climbStairs(n - 2));

  return memo.get(n);
}
