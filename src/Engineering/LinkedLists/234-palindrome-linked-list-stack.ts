// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// Given the head of a singly linked list,
// return true if it is a palindrome.

interface ILinkedListNode {
  next: ILinkedListNode;
  val: number;
}

// Two pass, O(n)
function isPalindromeStack(head: ILinkedListNode) {
  let current = head;
  let isPalindrome = true;
  const stack = [];

  while (current) {
    stack.push(current);
    current = current.next;
  }

  current = head;
  while (current) {
    const _current = stack.pop();
    if (_current.val !== current.val) isPalindrome = false;
    current = current.next;
  }

  return stack.length === 0 && isPalindrome;
}
