// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal
// of its nodes' values.

interface Node {
  val: number,
  children: Node[]
}

function levelOrderFlat(root: Node) {
  const collection = [];
  const queue = root ? [root] : [];

  while (queue.length > 0) {
    // on each new phase the previous residue of the queue
    // becomes current level
    const level = [...queue];
    // here we can work with entire level in linear fashion
    collection.push(level.map(node => node.val));
    // the next level will be left-to-right aggregation of all children nodes
    // pushed in the right-in/left-out queue (right-to-left)
    level.forEach(() => queue.push(...queue.shift().children));
  }

  return collection;
}
