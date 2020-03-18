import TreeNode, { ITreeNode } from './TreeNode';
import { Alphanumeric, SerializedBiTree } from '../Types';

interface IBinaryTreeRig {
  treeContent: ITreeNode;
  getAllNodesInPreOrder(): ITreeNode[];
}

interface IBinaryTreeRigConstructor {
  new (treeContent: ITreeNode): IBinaryTreeRig;
  deserializeTree(treeArr: SerializedBiTree): ITreeNode;
}

const BinaryTreeRig: IBinaryTreeRigConstructor = class BinaryTreeRig
  implements IBinaryTreeRig {
  constructor(public treeContent: ITreeNode) {}

  getAllNodesInPreOrder() {
    const collection: ITreeNode[] = [];
    const stack: ITreeNode[] = [];

    if (this.treeContent) stack.push(this.treeContent);

    while (stack.length > 0) {
      const node = stack.pop();

      collection.push(node);

      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }

    return collection;
  }

  static deserializeTree(treeArr: SerializedBiTree): ITreeNode {
    if (treeArr.length === 0) return null;

    let nodePointer = 0;
    const root = new TreeNode(treeArr[nodePointer++]);
    const queue: ITreeNode[] = [root];

    while (queue.length > 0 && nodePointer < treeArr.length) {
      const current: ITreeNode = queue.shift();

      if (nodePointer < treeArr.length) {
        const nodeValue: Alphanumeric = treeArr[nodePointer++];

        if (nodeValue !== null) {
          const node: ITreeNode = new TreeNode(nodeValue);
          current.left = node;
          queue.push(node);
        }
      }

      if (nodePointer < treeArr.length) {
        const nodeValue: Alphanumeric = treeArr[nodePointer++];

        if (nodeValue !== null) {
          const node: ITreeNode = new TreeNode(nodeValue);
          current.right = node;
          queue.push(node);
        }
      }
    }

    return root;
  }
};

export default BinaryTreeRig;
