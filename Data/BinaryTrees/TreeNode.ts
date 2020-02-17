import { Alphanumeric } from '../types';

interface ITreeNode {
    value: Alphanumeric
    left: TreeNode
    right: TreeNode
}

class TreeNode implements ITreeNode {
    constructor(
        public value: Alphanumeric,
        public left: TreeNode,
        public right: TreeNode,
    ) {}
}

export default TreeNode;