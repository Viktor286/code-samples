// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Given the root of a binary tree, return the level order traversal
// of its nodes' values. (i.e., from left to right, level by level).

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function levelOrder(root: IBinaryNode): number[][] {
  const collection: number[][] = [];

  if (!root) {
    return collection;
  }

  let queue = [root];

  while (queue.length > 0) {
    const level = [...queue];
    collection.push(level.map((e) => e.val));

    level.forEach((node) => {
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    });

    queue = queue.slice(level.length);
  }

  return collection;
}
