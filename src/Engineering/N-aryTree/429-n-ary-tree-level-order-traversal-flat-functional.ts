// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal
// of its nodes' values.

interface Node {
  val: number;
  children: Node[];
}

function levelOrderFlatFunc(root: Node) {
  const collection = [];
  let level = root ? [root] : [];

  while (level.length > 0) {
    // add current level values to the collection
    collection.push(level.map((node) => node.val));
    // override current level with values from its children (order matters)
    level = level.reduce((a, n) => [...a, ...n.children], []);
  }

  return collection;
}
