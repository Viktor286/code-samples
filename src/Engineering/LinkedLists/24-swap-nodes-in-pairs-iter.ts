// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/
// Given a linked list, swap every two
// adjacent nodes and return its head. (values stay with nodes)

interface ListNode {
  val: number;
  next: ListNode | null;
}

function swapPairsIter(head: ListNode) {
  if (!head || !head.next) return head;

  const dummy = { next: head, val: -1 } as ListNode;
  let prev = dummy;
  let current = head;

  while (current && current.next) {
    prev.next = current.next; // 0 -> 2 (final pos btw prev & right)
    current.next = prev.next.next; // 1 -> 3 (final pos btw cur & afterRight)
    prev.next.next = current; // 2 -> 1 (final pos btw right & cur)

    prev = current; // prev advances to current
    current = current.next; // current advances to 3
  }

  return dummy.next;
}
