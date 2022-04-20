// 173. Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/
// Implement the BSTIterator class that represents an iterator over the in-order traversal of a binary search tree (BST)

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

class BSTIterator {
  main: Iterator<number>;
  value: number;
  done: boolean;

  constructor(root: IBinaryNode) {
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

  next() {
    const current = this.value;
    ({ value: this.value, done: this.done } = this.main.next());
    return current;
  }

  hasNext() {
    return !this.done;
  }
}
