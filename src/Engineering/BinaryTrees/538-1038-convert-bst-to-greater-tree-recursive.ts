// 538. Convert BST to Greater Tree
// https://leetcode.com/problems/convert-bst-to-greater-tree/
// Given the root of a Binary Search Tree (BST), convert it to
// a Greater Tree such that every key of the original BST
// is changed to the original key plus the sum of all keys
// greater than the original key in BST.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

let sum = 0;

function convertBSTRecursive(node: IBinaryNode) {
  if (!node) return null;
  if (node.right) convertBSTRecursive(node.right);
  sum += node.val;
  node.val = sum;
  if (node.left) convertBSTRecursive(node.left);
  return node;
}
