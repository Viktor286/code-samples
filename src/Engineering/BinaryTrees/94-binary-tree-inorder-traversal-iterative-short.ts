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

// Iterative short
function inorderTraversalShort (node: IBinaryNode) {
  const stack = [];
  const collection = [];

  while (node !== null || stack.length !== 0) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      collection.push(node.val);
      node = node.right;
    }
  }

  return collection;
}
