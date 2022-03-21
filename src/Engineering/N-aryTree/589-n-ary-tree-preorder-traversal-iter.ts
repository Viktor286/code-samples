// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

interface Node {
  val: number,
  children: Node[]
}

// Iterative approach
function preorderIterative(root: Node): number[] {
  if (!root) {
    return [];
  }

  const stack = [root];
  const collection = [];

  while (stack.length > 0) {
    const node = stack.pop();
    collection.push(node.val);

    let i = node.children.length - 1;
    while (i >= 0) {
      stack.push(node.children[i]);
      i--;
    }
  }

  return collection;
}
