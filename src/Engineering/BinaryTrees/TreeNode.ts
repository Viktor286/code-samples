import { Alphanumeric } from '../Types';

export interface ITreeNode {
  value: Alphanumeric;
  left: ITreeNode | null;
  right: ITreeNode | null;
}

interface ITreeNodeConstructor {
  new (
    value?: Alphanumeric,
    left?: ITreeNode | null,
    right?: ITreeNode,
  ): ITreeNode;
}

const TreeNode: ITreeNodeConstructor = class TreeNode implements ITreeNode {
  constructor(
    public value: Alphanumeric = 'N/A',
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
};

export default TreeNode;
