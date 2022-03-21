// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal of its nodes' values.

interface Node {
  val: number,
  children: Node[]
}

function levelOrder(root: Node) {
  if (!root) {
    return [];
  }

  const collection: number[][] = [];
  const queue: Node[] = [root];

  while (queue.length > 0) {
    const level: number[] = [];
    let levelCount = queue.length;

    while (levelCount > 0) {
      const current = queue.shift();
      current.children.forEach(node => queue.push(node));
      // queue = [...queue, ...current.children];
      // const current = queue.pop();
      // current.children.forEach(node => queue.unshift(node));
      // // queue = [...current.children.reverse(), ...queue];

      level.push(current.val);
      levelCount--;
    }

    collection.push(level);
  }

  return collection;
}
