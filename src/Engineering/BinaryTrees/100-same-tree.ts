// 100. Same Tree
// https://leetcode.com/problems/same-tree/submissions/
// Given the roots of two binary trees p and q,
// write a function to check if they are the same or not.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function isSameTree(p: IBinaryNode, q: IBinaryNode) {
  // Two DFS one-after-another comparing each node,
  // should work because of order invariant

  if (!p && !q) {
    return true;
  }

  const stack = [p];
  const _stack = [q];

  while (stack.length > 0 && _stack.length > 0) {
    const current = stack.pop();
    const _current = _stack.pop();

    if (
      current?.val !== _current?.val ||
      current?.left?.val !== _current?.left?.val ||
      current?.right?.val !== _current?.right?.val
    ) {
      return false;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
    if (_current.right) _stack.push(_current.right);
    if (_current.left) _stack.push(_current.left);
  }

  return true;
}
