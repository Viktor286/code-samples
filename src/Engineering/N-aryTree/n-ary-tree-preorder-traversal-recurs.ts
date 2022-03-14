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

// Recursive approach
const collection: number[] = [];
function preorderRecursive(node: Node) {
  if (node === null) {
    return collection;
  }

  collection.push(node.val);

  for(let i=0; i < node.children.length; i++) {
    preorderRecursive(node.children[i]);
  }

  return collection;
}
