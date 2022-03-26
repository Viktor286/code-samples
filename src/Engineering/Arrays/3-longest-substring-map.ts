// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring
// without repeating characters. Input: s = "abcabcbb" Output: 3
function lengthOfLongestSubstring(s: string) {
  if (s.length === 0 || s.length === 1) {
    return s.length;
  }

  const seen = new Map();
  let maxLen = 0;
  let start = 0; // alt start = -1;

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i]) && start < seen.get(s[i]) + 1) {
      start = seen.get(s[i]) + 1;
      // + 1 is post duplicate char index
    }

    seen.set(s[i], i);

    if (maxLen < i - start + 1) maxLen = i - start + 1;
    // + 1 is index shift
  }

  return maxLen;
}
