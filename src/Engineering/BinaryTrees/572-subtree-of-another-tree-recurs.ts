// 572. Subtree of Another Tree
// Given the roots of two binary trees root and subRoot,
// return true if there is a subtree of root with the same
// structure and node values of subRoot and false otherwise.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function isSame(s: IBinaryNode, t: IBinaryNode): boolean {
  if (!s && !t) return true;
  if (!s || !t) return false;
  if (s.val !== t.val) return false;
  return isSame(s.left, t.left) && isSame(s.right, t.right);
}

function isSubtree(root: IBinaryNode, subRoot: IBinaryNode): boolean {
  if (!root) return false;
  if (isSame(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
