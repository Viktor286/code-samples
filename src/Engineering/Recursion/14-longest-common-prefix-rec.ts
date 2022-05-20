// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(strs: string[]) {
  if (!strs || strs.length < 1) return '';
  return lcp(strs, 0, strs.length - 1);
}

function lcp(strs: string[], w1: number, w2: number): string {
  if (w1 == w2) return strs[w1];

  const mid = w1 + ((w2 - w1) >> 1);
  const leftLcp = lcp(strs, w1, mid);
  const rightLcp = lcp(strs, mid + 1, w2);

  return commonPrefix(leftLcp, rightLcp);
}

function commonPrefix(w1: string, w2: string) {
  const min = Math.min(w1.length, w2.length);
  for (let i = 0; i < min; i++) {
    if (w1[i] != w2[i]) return w1.slice(0, i);
  }
  return w1.slice(0, min);
}
