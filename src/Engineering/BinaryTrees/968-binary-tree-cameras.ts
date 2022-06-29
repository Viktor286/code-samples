// 968. Binary Tree Cameras
// https://leetcode.com/problems/binary-tree-cameras/
// You are given the root of a binary tree. We install cameras on the tree nodes
// where each camera at a node can monitor its parent, itself, and its immediate children.
// Return the minimum number of cameras needed to monitor all nodes of the tree.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

interface ICovered extends Set<any> {
  camerasCount: number;
}

function minCameraCover(root: IBinaryNode) {
  const covered = new Set() as ICovered;
  covered.camerasCount = 0;
  covered.add(null);

  postOrderDfs(root, null, covered);

  return covered.camerasCount;
}

function postOrderDfs(node: IBinaryNode, parent: IBinaryNode, covered: ICovered) {
  if (node !== null) {
    postOrderDfs(node.left, node, covered);
    postOrderDfs(node.right, node, covered);

    if ((parent == null && !covered.has(node)) || !covered.has(node.left) || !covered.has(node.right)) {
      covered.camerasCount++;
      covered.add(parent);
      covered.add(node);
      covered.add(node.left);
      covered.add(node.right);
    }
  }
}
