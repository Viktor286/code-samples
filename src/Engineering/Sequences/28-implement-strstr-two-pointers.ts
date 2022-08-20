// 28. Implement strStr()
// https://leetcode.com/problems/implement-strstr/
// Given two strings needle and haystack,
// return the index of the first occurrence of needle
// in haystack, or -1 if there was no such.

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

// More solutions for "needle and haystack" problem:
// 1. Math with invariants:
// https://leetcode.com/problems/implement-strstr/discuss/12807/Elegant-Java-solution

// 2. The Knuth-Morris-Pratt Algorithm:
// https://leetcode.com/problems/implement-strstr/discuss/12956/C%2B%2B-Brute-Force-and-KMP

// 3. KMP, Knuth–Morris–Pratt algorithm
// https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm

// 4. Boyer–Moore string-search algorithm
//  https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string-search_algorithm

// 5. Two-way string-matching algorithm
// https://en.wikipedia.org/wiki/Two-way_string-matching_algorithm

// 6. Rabin–Karp algorithm (with rolling hash)
// https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
