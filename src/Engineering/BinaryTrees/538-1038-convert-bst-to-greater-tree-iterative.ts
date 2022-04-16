// 538. Convert BST to Greater Tree
// https://leetcode.com/problems/convert-bst-to-greater-tree/
// Given the root of a Binary Search Tree (BST), convert it to
// a Greater Tree such that every key of the original BST
// is changed to the original key plus the sum of all keys
// greater than the original key in BST.
// iterative approach

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function convertBST(root: IBinaryNode) {
  if (!root) {
    return null;
  }

  const stack = [];
  let current = root;
  let sum = 0;

  while (stack.length > 0 || current) {
    if (current) {
      stack.push(current);
      current = current.right;
    } else {
      const node = stack.pop();
      sum += node.val;
      node.val = sum;
      current = node.left;
    }
  }

  return root;
}
