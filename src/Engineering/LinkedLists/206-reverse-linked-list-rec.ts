// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/
// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

interface ListNode {
  val: number;
  next: ListNode | null;
}

function reverse(cur: ListNode, prev: ListNode = null): ListNode {
  if (!cur) {
    return prev;
  }

  const next = cur.next;
  cur.next = prev;

  return reverse(next, cur);
}

function reverseList(head: ListNode) {
  return reverse(head);
}
