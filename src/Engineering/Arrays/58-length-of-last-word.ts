// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/
// Given a string s consisting of words and spaces,
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

function lengthOfLastWord(s: string) {
  let sIdx = s.length - 1;

  while (sIdx >= 0) {
    if (s[sIdx] !== ' ') break;
    sIdx--;
  }

  let charIdx = sIdx;
  let cnt = 0;
  while (charIdx >= 0) {
    cnt++;

    if (s[charIdx] === ' ') {
      cnt--;
      break;
    }

    if (charIdx === 0) break;
    charIdx--;
  }

  return cnt;
}
