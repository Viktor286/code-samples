// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Given the root of a binary tree, return its maximum depth.

interface IBinaryNode {
  left: IBinaryNode | null,
  right: IBinaryNode | null,
  val: number,
  d: number
}

function maxDepthDFS(root: IBinaryNode) {
  let maxLevel = 0;

  if (!root) {
    return maxLevel;
  }

  root.d = 1;
  const stack = [root];

  while (0 < stack.length) {
    const node = stack.pop();

    if (node.d > maxLevel) maxLevel = node.d;

    if (node.right) {
      node.right.d = node.d + 1;
      stack.push(node.right);
    }

    if (node.left) {
      node.left.d = node.d + 1;
      stack.push(node.left);
    }
  }

  return maxLevel;
}
