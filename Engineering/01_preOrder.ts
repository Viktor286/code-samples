interface ITreeNode {
    value: Alphanumeric
    left: TreeNode
    right: TreeNode
}

type Alphanumeric = (number|string);

// type BiTreeSerialized = Array <number|null>;
// const treeFlatMap: BiTreeSerialized = [1, null, 2, 3];

class TreeNode implements ITreeNode{
    constructor(
        public value: Alphanumeric,
        public left: TreeNode,
        public right: TreeNode,
    ) {}
}

const tree: TreeNode = new TreeNode(1, null, new TreeNode(2, new TreeNode(3, null, null), null));

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

console.log(preOrderIterativeTraverse(tree));
console.log(preOrderRecursiveTraverse(tree));