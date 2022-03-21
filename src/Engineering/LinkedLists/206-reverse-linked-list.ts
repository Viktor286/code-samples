// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

interface ListNode {
  val: number,
  next: ListNode | null
}

function reverseList(head: ListNode) {
  let tempHead = null;

  while (head) { // 1 -> 2 -> 3
    const next = head.next; // cache the next pointer (null for last)
    head.next = tempHead; // set curr to prev node (null for first step)

    tempHead = head; // set future prev to curr
    head = next; // set future curr
  }

  return tempHead;
}
