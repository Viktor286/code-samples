// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/
// Given the root of a binary tree,
// determine if it is a valid binary search tree (BST).

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function isValidBST(root: IBinaryNode) {
  if (!root) return false;

  const stack = [];
  let current = root;
  let prev = -Infinity;

  while (stack.length > 0 || current) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    const node = stack.pop();

    if (prev >= node.val) return false;
    prev = node.val;

    current = node.right;
  }

  return true;
}
