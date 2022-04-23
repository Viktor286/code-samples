// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Given the root of a binary search tree, and an integer k,
// return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function kthSmallest(root: IBinaryNode | null, k: number): number {
  const stack = [];
  let current = root;
  let i = 0;
  while (current || stack) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    const node = stack.pop();
    i++;
    if (i === k) {
      return node.val;
    }
    current = node.right;
  }

  return null;
}
