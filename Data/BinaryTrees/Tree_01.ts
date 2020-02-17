import TreeNode from './TreeNode';

// const treeData: BiTreeSerialized = [1, null, 2, 3];

const tree: TreeNode =
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));

export default tree;
