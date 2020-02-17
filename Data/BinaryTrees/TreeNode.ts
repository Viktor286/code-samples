import { Alphanumeric } from '../types';

interface ITreeNode {
    value: Alphanumeric
    left: TreeNode
    right: TreeNode
}

class TreeNode implements ITreeNode {
    constructor(
        public value: Alphanumeric = 'N/A',
        public left: TreeNode = null,
        public right: TreeNode = null,
    ) {}
}

export default TreeNode;