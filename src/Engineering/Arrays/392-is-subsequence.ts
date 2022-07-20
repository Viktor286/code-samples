// 392. Is Subsequence
// Given two strings s and t, return true if
// s is a subsequence of t, or false otherwise.
// Subsequence is formed from some elements
// of the origin keeping the order.
// e.g. All elements of s should be in t in the same order.

function isSubsequence(s: string, t: string) {
  let l = 0;
  let r = 0;

  while (r < t.length) {
    if (s[l] === t[r]) l++;
    r++;
  }

  return l === s.length;
}
