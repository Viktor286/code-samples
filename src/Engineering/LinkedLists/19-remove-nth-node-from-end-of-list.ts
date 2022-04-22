// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

interface LinkedListNode {
  val: number;
  next: LinkedListNode | null;
}

// 1) Go end & make two-way-list, go n nodes back keeping prev, then connect prev to next; O(n) time, O space. Cons: origin is mutated.
// 2) On first pass we can count len of list and get the # of position for n: p = len - n, then delete that node on second pass. O(n) time, O(1) space, the only downsize is two-passes.
// 3) Go to end and put all nodes in stack. Get n, n-1, n+1 nodes from stack and rewire them (space complexity is O(n)). We also can keep the n nodes in n-sized queue, then first node in queue will be len-n at the end.
// 4) Instead of n-sized queue we can keep two pointers as edges of the queue left & right, where right will be left + n. Then increment both pointers till the end. The left pointer would be len - n node to remove.

function removeNthFromEnd(head: LinkedListNode, n: number) {
 let right = head;
  let left = head;

  for(let i = 0; i < n; i++) {
    right = right.next;
  }

  // if distanced pointer points to the null then n node is head.
  // because of the task's constrain: "1 <= n <= sz" we can be sure n points at least at the first node.
  // Since it's a single linked list we can just return head.next as root of new list.
  if (!right) return head.next;

  let prev = head;
  while(right) {
    right = right.next;
    prev = left;
    left = left.next;
  }

  prev.next = left.next;

  return head;
}
