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

  while (head) {
    const next = head.next; // cache the next pointer (null for last)
    head.next = previous; // set curr to prev node (null for first step)

    previous = head; // set future prev to curr
    head = next; // set future curr
  }

  return previous;
}
