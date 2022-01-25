import { Alphanumeric } from '../Types';
import ITreeNode from './Classes/TreeNode';

const traverseAndCollect = (root: ITreeNode, collection: Alphanumeric[]): void => {
  collection.push(root.value);
  if (root.left) traverseAndCollect(root.left, collection);
  if (root.right) traverseAndCollect(root.right, collection);
};

export default function preOrderRecursiveTraverse(root: ITreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];
  if (root) traverseAndCollect(root, collection);
  return collection;
}
