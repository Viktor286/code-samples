// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
// Given two strings needle and haystack,
// return the index of the first occurrence of needle
// in haystack, or -1 if there was no such.

// Two more solutions to consider:
// 1. Math with invariants:
// https://leetcode.com/problems/implement-strstr/discuss/12807/Elegant-Java-solution

// 2. The Knuth-Morris-Pratt Algorithm:
// https://leetcode.com/problems/implement-strstr/discuss/12956/C%2B%2B-Brute-Force-and-KMP

function strStr(haystack: string, needle: string) {
  if (needle.length < 1) return 0;

  let n = 0;
  for (let h = 0; h < haystack.length || h + needle.length < haystack.length; h++) {
    if (haystack[h] === needle[n]) {
      const starterIdx = h;

      while (n < needle.length) {
        if (haystack[h] !== needle[n]) {
          n = 0;
          h = starterIdx;
          break;
        }

        n++;
        h++;
      }

      if (n === needle.length) {
        return starterIdx;
      }
    }
  }

  return -1;
}
