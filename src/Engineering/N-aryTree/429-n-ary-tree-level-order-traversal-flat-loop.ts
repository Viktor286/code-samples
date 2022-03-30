// 429. N-ary Tree Level Order Traversal
// https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Given an n-ary tree, return the level order traversal
// of its nodes' values.

interface Node {
  val: number,
  children: Node[]
}

function levelOrderFlatLoops(root: Node) {
  const collection = [];
  // keep current level as queue
  let level = root ? [root] : [];

  // while something in the level...
  while(level.length > 0) {
    const nextLevel = [];
    const currentLevelValues = [];

    // we can work with entire level in linear fashion
    // taking nodes in left-to-right order (similar to left-headed queue)
    for(let i = 0; i < level.length; i++) {
      const currentNode = level[i];
      currentLevelValues.push(currentNode.val);

      // aggregate the next level via left-to-right merge of all children.
      // the order matters: here the children should be placed
      // to the level in left-to-right order
      for(let j = 0; j < currentNode.children.length; j++) {
        nextLevel.push(currentNode.children[j]);
      }
    }

    collection.push(currentLevelValues);
    level = nextLevel; // override queue
  }

  return collection;
}
