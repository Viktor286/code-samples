// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/
// Given the root of a binary tree,
// return the inorder traversal of its nodes' values.
// Binary tree node: {left, val, right}

interface IBinaryNode {
  left: IBinaryNode | null,
  right: IBinaryNode | null,
  val: number
}

function inorderTraversalVisited(root: IBinaryNode) {
  const collection: number[] = [];
  const stack: [IBinaryNode, boolean][] = [[root, false]];

  while(stack.length > 0) {
    const [node, visited]: [IBinaryNode, boolean] = stack.pop();

    if (node) {
      if (visited) {
        collection.push(node.val);
      } else {
        // inorder: left -> root -> right
        if (node.right) stack.push([node.right, false]);
        stack.push([node, true]);
        if (node.left) stack.push([node.left, false]);
      }
    }
  }

  return collection;
}
