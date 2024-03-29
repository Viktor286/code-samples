import TreeNode from './TreeNode';
import { Alphanumeric, SerializedBiTree } from '../../Types';

export default class BinaryTreeRig {
  constructor(public treeContent: TreeNode) {}

  getAllNodesInPreOrder() {
    const collection: TreeNode[] = [];
    const stack: TreeNode[] = [];

    if (this.treeContent) stack.push(this.treeContent);

    while (stack.length > 0) {
      const node = stack.pop();

      collection.push(node);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return collection;
  }

  static deserializeTree(treeArr: SerializedBiTree): TreeNode {
    if (treeArr.length === 0) return null;

    let nodePointer = 0;
    const root = new TreeNode(treeArr[nodePointer++]);
    const queue: TreeNode[] = [root];

    while (queue.length > 0 && nodePointer < treeArr.length) {
      const current: TreeNode = queue.shift();

      if (nodePointer < treeArr.length) {
        const nodeValue: Alphanumeric = treeArr[nodePointer++];

        if (nodeValue !== null) {
          const node: TreeNode = new TreeNode(nodeValue);
          current.left = node;
          queue.push(node);
        }
      }

      if (nodePointer < treeArr.length) {
        const nodeValue: Alphanumeric = treeArr[nodePointer++];

        if (nodeValue !== null) {
          const node: TreeNode = new TreeNode(nodeValue);
          current.right = node;
          queue.push(node);
        }
      }
    }

    return root;
  }
}
