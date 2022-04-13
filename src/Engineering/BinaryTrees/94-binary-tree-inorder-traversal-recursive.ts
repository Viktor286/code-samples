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

// Recursive
function inOrder(node: IBinaryNode, collection: number[]) {
  if (node.left) inOrder(node.left, collection);
  collection.push(node.val);
  if (node.right) inOrder(node.right, collection);
}

function inorderTraversalRecursive(node: IBinaryNode) {
  if (!node) {
    return [];
  }

  const collection: number[] = [];
  inOrder(node, collection);
  return collection;
}
