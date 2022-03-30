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
    // on each new level the previous residue of the queue
    // becomes current level
    const level = [...queue];
    // here we can work with entire level in linear fashion
    collection.push(level.map(node => node.val));
    // the next level will be left-to-right aggregation of all children nodes
    // pushed in the right-in/left-out queue (left-headed queue).
    // We don't do anything with nodes in this loop rather than
    // remove node from queue and add its corresponding children into
    // the queue in the "left-to-right" order.
    level.forEach(() => queue.push(...queue.shift().children));
  }

  return collection;
}
