import { SerializedBiTree, Alphanumeric } from '../../Data/types'
import TreeNode from '../../Data/BinaryTrees/TreeNode'

export function deserialize(treeArr: SerializedBiTree): TreeNode {
    if (treeArr.length === 0)
        return null;

    let nodePointer: number = 0;
    const root = new TreeNode(treeArr[nodePointer++]);
    const queue: TreeNode[] = [root];

    while (queue.length > 0 && nodePointer < treeArr.length) {
        const current: TreeNode = queue.shift();

        if (nodePointer < treeArr.length) {
            const nodeValue: Alphanumeric = treeArr[nodePointer++];

            if (nodeValue !== null) {
                const node: TreeNode = new TreeNode(nodeValue);
                current.left = node;
                queue.push(node);
            }
        }

        if (nodePointer < treeArr.length) {
            const nodeValue: Alphanumeric = treeArr[nodePointer++];

            if (nodeValue !== null) {
                const node: TreeNode = new TreeNode(nodeValue);
                current.right = node;
                queue.push(node);
            }
        }
    }

    return root;
}