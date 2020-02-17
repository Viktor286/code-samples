import { Alphanumeric } from '../../Data/types';
import TreeNode from '../../Data/BinaryTrees/TreeNode';
import { serializedTree } from '../../Data/BinaryTrees/Tree_01';
import { deserialize } from "./TreeConvertor";

function preOrderIterativeTraverse(root: TreeNode):Alphanumeric[] {
    let collection: Alphanumeric[] = [];
    let stack: TreeNode[] = [];

    if (root) stack.push(root);

    while(stack.length > 0) {
        const node = stack.pop();

        collection.push(node.value);

        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }

    return collection;
}

function preOrderRecursiveTraverse(root: TreeNode):Alphanumeric[] {
    let collection: Alphanumeric[] = [];

    const traverseAndCollect: Function = (root: TreeNode):void => {
        // executionStack.pop()

        collection.push(root.value);

        if (root.left) traverseAndCollect(root.left); // executionStack.push()
        if (root.right) traverseAndCollect(root.right); // executionStack.push()
    };

    traverseAndCollect(root); // executionStack.push() until length > 0

    return collection;
}

console.log(preOrderIterativeTraverse(deserialize(serializedTree)));
console.log(preOrderRecursiveTraverse(deserialize(serializedTree)));