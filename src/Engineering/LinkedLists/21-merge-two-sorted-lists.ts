// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// Merge the two lists in a one sorted list.
// Return the head of the merged linked list.

interface LinkedListNode {
  val: number,
  next: LinkedListNode | null
}

function mergeTwoLists(l1: LinkedListNode, l2: LinkedListNode) {
  const dummy = { val: 0, next: null } as LinkedListNode;

  let l1P = l1;
  let l2P = l2;
  let current = dummy;

  while (l1P && l2P) {
    if (l1P.val <= l2P.val) {
      current.next = l1P;
      l1P = l1P.next;
    } else {
      current.next = l2P;
      l2P = l2P.next;
    }
    current = current.next;
  }

  if (l1P) current.next = l1P;
  if (l2P) current.next = l2P;

  return dummy.next;
}
