import { Alphanumeric } from '../Types';
import ITreeNode from './Classes/TreeNode';

const postOrderTraverseAndCollect: Function = (root: ITreeNode, collection: Alphanumeric[]): void => {
  if (root.left) postOrderTraverseAndCollect(root.left, collection);
  if (root.right) postOrderTraverseAndCollect(root.right, collection);
  collection.push(root.value);
};

export default function postOrderRecursiveTraverse(root: ITreeNode): Alphanumeric[] {
  const collection: Alphanumeric[] = [];
  if (root) postOrderTraverseAndCollect(root, collection);
  return collection;
}
