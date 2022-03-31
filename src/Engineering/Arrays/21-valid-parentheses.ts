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
  const parentheses = new Map([  [ ']', '[' ], [ "}", "{" ], [ ")", "(" ] ]);
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if ([...parentheses.values()].includes(s[i])) {
      stack.push(s[i]);
    } else {
      const lastElm = stack.pop();
      if (lastElm !== parentheses.get(s[i])) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
