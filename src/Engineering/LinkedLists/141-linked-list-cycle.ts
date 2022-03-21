// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/
// Given head, the head of a linked list,
// determine if the linked list has a cycle in it.

interface ListNode {
  val: number,
  next: ListNode | null
}

function hasCycle(head: ListNode) {
  if (!head) {
    return false;
  }

  let walker = head;
  let runner = head;

  while (runner.next !== null && runner.next.next !== null) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      return true;
    }
  }

  return false;
}
