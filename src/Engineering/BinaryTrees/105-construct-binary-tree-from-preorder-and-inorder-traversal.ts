// 105. Construct Binary Tree from Preorder and Inorder Traversal
// Given two integer arrays preorder and inorder where preorder
// is the preorder traversal of a binary tree and inorder
// is the inorder traversal of the same tree, construct and return the binary tree.

class BinaryNode {
  constructor(
    public val = 0,
    public left: BinaryNode | null = null,
    public right: BinaryNode | null = null,
  ) {}
}

function buildTree(preorder: number[], inorder: number[]) {
  const preOrderIdx = 0;
  const inorderValToIdx = new Map();
  for (let i = 0; i < inorder.length; i++) inorderValToIdx.set(inorder[i], i);

  return arrayToTree(preorder, 0, preorder.length - 1, { preOrderIdx, inorderValToIdx });
}

// inorder "arrayToTree"
function arrayToTree(preorder: number[], left: number, right: number, payload: any) {
  if (left > right) return null;

  const { inorderValToIdx } = payload;

  const rootValue = preorder[payload.preOrderIdx++];
  const root = new BinaryNode(rootValue);

  const rootIdxInorder = inorderValToIdx.get(rootValue);

  root.left = arrayToTree(preorder, left, rootIdxInorder - 1, payload);
  root.right = arrayToTree(preorder, rootIdxInorder + 1, right, payload);

  return root;
}
