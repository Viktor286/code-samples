// 173. Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST)

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function BSTIterator(root: IBinaryNode) {
  this.main = (function* bst(): Iterator<number> {
    if (!root) {
      return null;
    }

    const stack = [];
    let current = root;
    while (stack.length > 0 || current) {
      while (current) {
        stack.push(current);
        current = current.left;
      }

      const node = stack.pop();
      yield node.val;
      current = node.right;
    }

    return null;
  })();

  ({ value: this.value, done: this.done } = this.main.next());
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const current = this.value;
  ({ value: this.value, done: this.done } = this.main.next());
  return current;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return !this.done;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
