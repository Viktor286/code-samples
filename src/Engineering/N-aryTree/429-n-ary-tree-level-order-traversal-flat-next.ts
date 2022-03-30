// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal
// of its nodes' values.

interface Node {
  val: number,
  children: Node[]
}

function levelOrderFlatNextLevel(root: Node) {
  const collection = [];
  // keep current level as queue
  let nextLevel = root ? [root] : [];
  // while something in the level...
  while(nextLevel.length > 0) {
    // we can work with entire level in linear fashion
    collection.push(nextLevel.map(node => node.val));
    // as a last step aggregate the next level via left-to-right merge of all children.
    // The left-to-right order of children's nodes matches right-in/left-out queue order
    // which is similar to shift-out/pop-in queue structure
    nextLevel = nextLevel.reduce((a, node) => [...a, ...node.children], []);
  }

  return collection;
}
