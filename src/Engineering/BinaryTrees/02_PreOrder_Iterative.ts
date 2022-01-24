import { Alphanumeric } from '../Types';
import ITreeNode from './Classes/TreeNode';

export default function preOrderIterativeTraverse(root: ITreeNode): Alphanumeric[] {
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
