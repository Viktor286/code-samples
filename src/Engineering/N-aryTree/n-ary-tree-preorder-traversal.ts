// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
interface Node {
  val: number,
  children: Node[]
}

// Iterative approach
function preorder(root: Node): number[] {
  if (!root) {
    return [];
  }

  const stack = [root];
  const collection = []

  while(stack.length > 0) {
    const node = stack.pop();
    collection.push(node.val);

    let i=node.children.length-1;
    while(i >= 0) {
      stack.push(node.children[i]);
      i--;
    }
  }

  return collection;
}

// Recursive approach
const collection: number[] = [];
function preorderRecursive(node: Node) {
  if (node === null) {
    return collection;
  }

  collection.push(node.val);

  for(let i=0; i < node.children.length; i++) {
    preorder(node.children[i]);
  }

  return collection;
}
