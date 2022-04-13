// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Given the root of a binary tree, return its maximum depth.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
  d: number;
}

function maxDepthBFS(root: IBinaryNode) {
  let levelCnt = 0;

  if (!root) {
    return 0;
  }

  const queue = [root];

  while (queue.length > 0) {
    let levelAmount = queue.length;
    levelCnt++;

    while (levelAmount > 0) {
      const node = queue.pop();
      if (node.left) queue.unshift(node.left);
      if (node.right) queue.unshift(node.right);
      levelAmount--;
    }
  }

  return levelCnt;
}
