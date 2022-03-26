// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring
// without repeating characters. Input: s = "abcabcbb" Output: 3
function lengthOfLongestSubstringSet(s: string) {
  const seen = new Set();
  let result = 0;
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    while (seen.has(s[r])) {
      seen.delete(s[l]);
      l++;
    }

    seen.add(s[r]);
    result = Math.max(result, r - l + 1);
  }

  return result;
}
