// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/
// Given the root of a binary tree, invert the tree,
// and return its root.

interface BiNode {
  left: BiNode;
  right: BiNode;
  val: number;
}

function invertTree(root: BiNode) {
  if (!root) {
    return null;
  }

  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();

    const left = current.left;
    current.left = current.right;
    current.right = left;

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return root;
}
