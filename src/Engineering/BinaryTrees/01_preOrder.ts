import { Alphanumeric } from '../Types';
import { ITreeNode } from './Classes/TreeNode';

export function preOrderIterativeTraverse(root: ITreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];
  const stack: ITreeNode[] = [];

  if (root) stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();

    collection.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return collection;
}

export function preOrderRecursiveTraverse(root: ITreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];

  const traverseAndCollect: Function = (root: ITreeNode): void => {
    // executionStack.pop()

    collection.push(root.value);

    if (root.left) traverseAndCollect(root.left); // executionStack.push()
    if (root.right) traverseAndCollect(root.right); // executionStack.push()
  };

  if (root) traverseAndCollect(root); // executionStack.push() until length > 0

  return collection;
}
