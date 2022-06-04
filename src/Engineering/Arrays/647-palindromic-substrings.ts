// 647. Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/
// Given a string s, return the number of palindromic substrings in it.

function countPalindromes(str: string, l: number, r: number) {
  if (str[l] !== str[r]) return 0;

  let count = 1;

  while (l >= 0 && r < str.length && str[l] === str[r]) {
    l--;
    r++;
    count++;
  }

  l++;
  r--;
  count--;

  return count;
}

function countSubstrings(s: string) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += countPalindromes(s, i, i);
    count += countPalindromes(s, i, i + 1);
  }

  return count;
}
