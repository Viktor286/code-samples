// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.

interface ListNode {
  val: number;
  next: ListNode | null;
  visited: boolean;
}

function hasCycle(head: ListNode) {
  if (!head) {
    return false;
  }

  let current = head;

  while (current) {
    if (current.visited) {
      return true;
    }

    current.visited = true;
    current = current.next;
  }

  return false;
}
