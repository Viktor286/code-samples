// 100. Same Tree
// https://leetcode.com/problems/same-tree/submissions/
// Given the roots of two binary trees p and q,
// write a function to check if they are the same or not.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function isSameTreeRec(p: IBinaryNode, q: IBinaryNode) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}
