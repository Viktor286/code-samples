// 572. Subtree of Another Tree
// Given the roots of two binary trees root and subRoot,
// return true if there is a subtree of root with the same
// structure and node values of subRoot and false otherwise.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function isSameTree(p: IBinaryNode, q: IBinaryNode) {
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

function isSubtree(root: IBinaryNode, subRoot: IBinaryNode) {
  if (!root && !subRoot) return true;
  const stack = [root];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === subRoot.val && isSameTree(current, subRoot)) {
      return true;
    } else {
      if (current.right) stack.push(current.right);
      if (current.left) stack.push(current.left);
    }
  }

  return false;
}
