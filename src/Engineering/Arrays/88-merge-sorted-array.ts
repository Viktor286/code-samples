// 88. Merge Sorted Array
// https://leetcode.com/problems/merge-sorted-array/
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// [1,2,2,3,5,6] [2,5,6]
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// ----
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// ----
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

function merge(nums1: number[], m: number, nums2: number[], n: number) {
  let wp = nums1.length - 1;
  let n1 = m - 1;
  let n2 = n - 1;

  while (wp >= 0) {
    if (n2 < 0 || nums1[n1] >= nums2[n2]) {
      nums1[wp] = nums1[n1];
      n1--;
    } else {
      nums1[wp] = nums2[n2];
      n2--;
    }
    wp--;
  }
}
