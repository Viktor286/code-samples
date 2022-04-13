// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/
// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has
// Node.val == val, and return the new head.

interface ListNode {
  val: number;
  next: ListNode | null;
}

function removeElementsIterNext(head: ListNode, val: number) {
  if (!head) {
    return null;
  }

  const dummy = {} as ListNode;
  dummy.next = head;
  let current = dummy;

  while (current.next !== null) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}
