// 242. Valid Anagram
// https://leetcode.com/problems/valid-anagram/
// Given two strings s and t, return true if
// t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging
// the letters of a different word or phrase, typically
// using all the original letters exactly once.
// Input: s = "anagram", t = "nagaram"
// Output: true

function isAnagram(s: string, t: string) {
  if (s.length !== t.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let char = map.get(s[i]);
      map.set(s[i], ++char);
    } else {
      map.set(s[i], 1);
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!map.has(t[j]) || map.get(t[j]) < 1) {
      return false;
    } else {
      let char = map.get(t[j]);
      map.set(t[j], --char);
    }
  }

  return true;
}
