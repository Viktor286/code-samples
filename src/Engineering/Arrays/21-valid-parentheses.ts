// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/
// Given a string s containing just the characters
// '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid. An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// Input: s = "()"
// Output: true
// Input: s = "(]"
// Output: false

function isValid(s: string) {
  // to keep corresponding brackets, let's make a matching map
  const openToClose = new Map([
    ['{', '}'],
    ['(', ')'],
    ['[', ']'],
  ]);
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openToClose.has(s[i])) {
      stack.push(s[i]); // add opening bracket into the stack
    } else {
      // it has to be closing bracket AND match the last opening bracket
      const last = stack.pop();
      if (s[i] !== openToClose.get(last)) return false;
    }
  }

  return stack.length === 0; // stack should be emtpy
}
