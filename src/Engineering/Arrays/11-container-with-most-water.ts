// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.

function maxArea(A: number[]): number {
  let l = 0;
  let r = A.length - 1;
  let maxWater = 0;

  while (l < r) {
    maxWater = Math.max(maxWater, Math.min(A[l], A[r]) * (r - l));

    if (A[l] > A[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxWater;
}
