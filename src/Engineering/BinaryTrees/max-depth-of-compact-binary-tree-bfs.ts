// Maximum Depth of Compacted Binary Tree
// Given the compact binary tree represented in array,
// return its maximum depth.

interface IBinaryNode {
  left: IBinaryNode | null;
  right: IBinaryNode | null;
  val: number;
  d: number;
}

function maxDepthCompactTree(tree: number[]) {
  if (tree.length < 1 || tree[0] === -1) return 0;

  const queue = [0];
  let h = 0;

  while (queue.length > 0) {
    let levelCnt = queue.length;

    while (levelCnt > 0) {
      const currentIdx = queue.shift();

      const leftNodeIdx = 2 * currentIdx + 1;
      const rightNodeIdx = 2 * currentIdx + 2;

      if (leftNodeIdx < tree.length && tree[leftNodeIdx] !== -1) queue.push(leftNodeIdx);
      if (rightNodeIdx < tree.length && tree[rightNodeIdx] !== -1) queue.push(rightNodeIdx);

      levelCnt--;
    }

    h++;
  }

  return h;
}
