import { Alphanumeric } from '../../Types';

export default class TreeNode {
  constructor(
    public value: Alphanumeric = 'N/A',
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}
