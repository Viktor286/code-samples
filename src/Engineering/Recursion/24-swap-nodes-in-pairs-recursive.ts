// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
// Given a linked list, swap every two
// adjacent nodes and return its head. (values stay with nodes)

interface ListNode {
  val: number;
  next: ListNode | null;
}

function swapPairs(head: ListNode) {
  if (!head || !head.next) return head;

  const right = head.next; // cache right
  // point current to the element returned by subSolution
  // (pass pointer to Next-of-Right element)
  head.next = swapPairs(head.next.next); // could and will be null eventually
  right.next = head; // finalize rewire: right -> current

  return right;
}
