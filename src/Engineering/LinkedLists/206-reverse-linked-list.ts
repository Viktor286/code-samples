// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

interface ListNode {
  val: number;
  next: ListNode | null;
}

function reverseList(head: ListNode) {
  let previous = null;
  let current = head;

  while (current) {
    const next = current.next; // cache the next pointer (null for last)
    current.next = previous; // set next to prev node (null for first step)

    previous = current; // advance future prev to the curr
    current = next; // advance future curr
  }

  return previous;
}
