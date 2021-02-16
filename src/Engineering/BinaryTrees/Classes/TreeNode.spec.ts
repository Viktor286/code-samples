import TreeNode from './TreeNode';

describe('TreeNode', () => {
  it('should create default value as N/A', () => {
    const node: TreeNode = new TreeNode();
    expect(node.value).toBe('N/A');
  });
});
