// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/
// Given a string s, find the first non-repeating
// character in it and return its index, otherwise return -1;

function toCharNum(char: string) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

function firstUniqChar(s: string) {
  const statAlphabet = new Array(26).fill(0);

  for (let c = 0; c < s.length; c++) {
    statAlphabet[toCharNum(s[c])]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (statAlphabet[toCharNum(s[i])] === 1) {
      return i;
    }
  }

  return -1;
}
