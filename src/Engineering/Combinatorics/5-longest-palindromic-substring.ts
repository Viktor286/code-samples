// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/
// Given a string s, return the longest palindromic substring in s.

interface ISubstring {
  l: number;
  max: number;
}

function longestPalindrome(s: string) {
  if (s.length < 2) return s;

  const ps: ISubstring = { l: 0, max: 0 };

  for (let i = 0; i < s.length - 1; i++) {
    discoverPalindrome(s, i, false, ps);
    discoverPalindrome(s, i, true, ps);
  }

  return s.slice(ps.l, ps.l + ps.max);
}

function discoverPalindrome(s: string, i: number, isEven: boolean, ps: ISubstring) {
  let j = i;
  let k = !isEven ? i : i + 1;

  while (j >= 0 && k < s.length && s[j] === s[k]) {
    j--;
    k++;
  }

  if (ps.max < k - j - 1) {
    ps.l = j + 1;
    ps.max = k - j - 1;
  }
}
