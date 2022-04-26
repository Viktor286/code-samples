// 99. Recover Binary Search Tree
// https://leetcode.com/problems/recover-binary-search-tree/
// You are given the root of a binary search tree (BST),
// where the values of exactly two nodes of the tree were
// swapped by mistake. Recover the tree without changing its structure.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
}

function dfs(node: IBinaryNode, inorder: IBinaryNode[]) {
  if (!node) return;

  dfs(node.left, inorder);

  // 3. While DFS, we're taking advantage of in-order
  // collecting node refs. (instead of just values)
  inorder.push(node);

  dfs(node.right, inorder);
}

function recoverTree(root: IBinaryNode) {
  const inorder: IBinaryNode[] = [];
  dfs(root, inorder);

  // Looking for the peak(first wrong node)
  // and valley (second wring node) in ordered list
  let peak: IBinaryNode;
  let valley: IBinaryNode;

  inorder.forEach((el, i) => {
    // (here if use just "!peak" then zero-value will lead to second overwrite.)
    if (peak === undefined && el.val > inorder[i + 1]?.val) peak = el;
    // 2. here we use overwrite deliberately, because we need the "valley"
    // but this exact pattern/condition will also fit for a "come-back" from the "peak".
    if (el.val < inorder[i - 1]?.val) valley = el;
    // Small visualization of peak & valley structure
    //   -
    // -- --- --
    //       -
  });

  // 3. We can use just switch values instead of switching nodes
  // (the problem description says clearly that we shouldn't change structure)
  const temp = peak.val;
  peak.val = valley.val;
  valley.val = temp;
}
