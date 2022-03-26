// 203. Remove Linked List Elements
// https://leetcode.com/problems/remove-linked-list-elements/
// Given the head of a linked list and an integer val,
// remove all the nodes of the linked list that has
// Node.val == val, and return the new head.

interface ListNode {
  val: number,
  next: ListNode | null
}

function removeElementsIterPrev(head: ListNode, val: number) {
  if (!head) {
    return null;
  }

  const dummy = {} as ListNode;
  dummy.next = head;
  let current = head;
  let prev = dummy;

  while(current !== null) {
    if (current.val === val) {
      prev.next = current.next;
    } else {
      prev = current;
    }

    current = current.next;
  }

  return dummy.next;
}
