// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Given a string s, find the length of the longest substring
// without repeating characters. Input: s = "abcabcbb" Output: 3

function lengthOfLongestSubstring(s: string) {
  if (s.length <= 1) return s.length;

  const charToIdx = new Map();
  let max = 0;
  let substringStartIdx = 0;

  for (let i = 0; i < s.length; i++) {
    const seenIdx = charToIdx.get(s[i]);
    // handle "abbab" (+1 is next char after duplicate)
    if (substringStartIdx <= seenIdx) substringStartIdx = seenIdx + 1;

    charToIdx.set(s[i], i);

    max = Math.max(i - substringStartIdx, max);
  }

  return max + 1;
}
