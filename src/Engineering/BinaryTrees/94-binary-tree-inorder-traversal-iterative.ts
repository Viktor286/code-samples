// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Given the root of a binary tree,
// return the inorder traversal of its nodes' values.
// Binary tree node: {left, val, right}

interface IBinaryNode {
  left: IBinaryNode | null,
  right: IBinaryNode | null,
  val: number
}

// Iterative
function inorderTraversalIterative(root: IBinaryNode) {
  if (!root) {
    return [];
  }

  const collection = [];
  const stack = [];
  let focus = root;

  while(focus != null || stack.length > 0) {
    while(focus != null) {
      stack.push(focus);
      focus = focus.left;
    }

    focus = stack.pop();
    collection.push(focus.val);
    focus = focus.right;
  }

  return collection;
}
