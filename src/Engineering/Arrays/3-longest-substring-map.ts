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
  let startSequenceIndex = 0;

  for (let i = 0; i < s.length; i++) {
    const seenCharIndex = seen.get(s[i]);
    if (startSequenceIndex <= seenCharIndex) startSequenceIndex = seenCharIndex + 1;
    // +1 is next char after duplicate

    seen.set(s[i], i);

    if (maxLen < i - startSequenceIndex + 1) maxLen = i - startSequenceIndex + 1;
    // +1 is inclusion of the first element after subtraction
  }

  return maxLen;
}
