// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
// Given the root of a binary tree, invert the tree,
// and return its root.

interface BiNode {
  left: BiNode;
  right: BiNode;
  val: number;
}

function invertTreeRecursive(root: BiNode) {
  if (!root) {
    return null;
  }

  const left = root.left;
  root.left = root.right;
  root.right = left;

  invertTreeRecursive(root.left);
  invertTreeRecursive(root.right);

  return root;
}
