// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Given the root of a binary tree, return its maximum depth.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
  d: number;
}

function maxDepthRecursive(node: IBinaryNode): number {
  if (!node) {
    return 0;
  }

  return Math.max(maxDepthRecursive(node.left), maxDepthRecursive(node.right)) + 1;
}
