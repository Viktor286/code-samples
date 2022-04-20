// 234. Palindrome Linked List
// https://leetcode.com/problems/palindrome-linked-list/
// Given the head of a singly linked list,
// return true if it is a palindrome.

interface ILinkedListNode {
  next: ILinkedListNode;
  val: number;
}

// One pass, find center and stop, reverse (mutate) the origin until that.
// Go backwards and compare from the middle.
function isPalindromeMiddle(head: ILinkedListNode) {
  let fast = head;
  let slow = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;

    const next = slow.next;
    slow.next = prev;

    prev = slow;
    slow = next;
  }

  // odd case, make step forward for slow
  if (fast) {
    slow = slow.next;
  }

  while (prev !== null && slow !== null) {
    if (prev.val !== slow.val) return false;
    prev = prev.next;
    slow = slow.next;
  }

  return prev === slow;
}
