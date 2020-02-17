import { Alphanumeric } from '../types';

interface ITreeNode {
    value: Alphanumeric
    left: (TreeNode|null)
    right: (TreeNode|null)
}

class TreeNode implements ITreeNode {
    constructor(
        public value: Alphanumeric = 'N/A',
        public left: (TreeNode|null) = null,
        public right: (TreeNode|null) = null,
    ) {}
}

export default TreeNode;