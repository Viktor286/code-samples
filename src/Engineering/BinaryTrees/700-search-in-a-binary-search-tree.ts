// 700. Search in a Binary Search Tree
// https://leetcode.com/problems/search-in-a-binary-search-tree/
// You are given the root of a binary search tree (BST) and an integer val.
// Find the node in the BST that the node's value equals val and return
// the subtree rooted with that node.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function searchBST(root: IBinaryNode, val: number): IBinaryNode | null {
  if (!root || root.val === val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
}

function searchBSTit(root: IBinaryNode, val: number) {
  if (!root) return root;

  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    if (node.val === val) return node;

    if (val < node.val && node.left) queue.push(node.left);
    if (val > node.val && node.right) queue.push(node.right);
  }

  return null;
}
