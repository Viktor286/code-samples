import { Alphanumeric } from '../Types';
import TreeNode from './TreeNode';

export function preOrderIterativeTraverse(root: TreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];
  const stack: TreeNode[] = [];

  if (root) stack.push(root);

  while (stack.length > 0) {
    const node = stack.pop();

    collection.push(node.value);

    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return collection;
}

export function preOrderRecursiveTraverse(root: TreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];

  const traverseAndCollect: Function = (root: TreeNode): void => {
    // executionStack.pop()

    collection.push(root.value);

    if (root.left) traverseAndCollect(root.left); // executionStack.push()
    if (root.right) traverseAndCollect(root.right); // executionStack.push()
  };

  traverseAndCollect(root); // executionStack.push() until length > 0

  return collection;
}
