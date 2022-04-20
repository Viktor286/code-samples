// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

function searchInsert(nums: number[], target: number) {
  let l = 0;
  let r = nums.length - 1;
  // let r = nums.length; // v.2 "right edge inclusive"
  let mid;

  while (l <= r) {
    // v.2 "right edge inclusive" (quite before dead loop)
    // while(l < r) {
    mid = l + ((r - l) >> 1);

    if (nums[mid] === target) {
      return mid;
    }

    if (target < nums[mid]) {
      r = mid - 1;
      // r = mid; // v.2 "right edge inclusive"
    } else {
      l = mid + 1;
    }
  }

  // 1) ---t[l,m,r]---- t < n[m] (case: r=mid-1) > then the l = m is already
  // greatest possible place for t (upper bound already narrowed down)
  // 2) ----[l,m,r]t--- n[m] < t (case: l=mid+1) > then only one step closer
  // to t would be m+1 which still will be an "l" after loop termination
  return l;
}
