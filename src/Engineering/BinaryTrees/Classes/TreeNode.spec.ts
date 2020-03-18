import TreeNode, { ITreeNode } from './TreeNode';

describe('TreeNode', () => {
  it('should create default value as N/A', () => {
    const node: ITreeNode = new TreeNode();
    expect(node.value).toBe('N/A');
  });
});
