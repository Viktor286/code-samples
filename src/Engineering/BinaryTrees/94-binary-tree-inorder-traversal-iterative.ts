// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Given the root of a binary tree,
// return the inorder traversal of its nodes' values.
// Binary tree node: {left, val, right}

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

// Iterative
function inorderTraversalIterative(root: IBinaryNode) {
  if (!root) {
    return [];
  }

  const collection = [];
  const stack = [];
  let current = root;

  while (current != null || stack.length > 0) {
    while (current != null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    collection.push(current.val);
    current = current.right;
  }

  return collection;
}
