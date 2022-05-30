// 344. Reverse String
// https://leetcode.com/problems/reverse-string/
// Write a function that reverses a string. (in-place)
// input is a char array: ["h","e","l","l","o"]

function swap(s: string[], a: number, b: number) {
  const temp = s[a];
  s[a] = s[b];
  s[b] = temp;
}

function reverse(s: string[], l: number, r: number) {
  if (l >= r) return;
  swap(s, l, r);
  // move pointers, then start recursion
  reverse(s, ++l, --r);
}

function reverseString(s: string[]) {
  reverse(s, 0, s.length - 1);
}
