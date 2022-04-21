/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function getHeight(tree) {
  let level = 0;
  const dfs = (node, lvl = 1) => {
    if (!node) return;
    level = Math.max(lvl, level);
    for (const ch of node?.children) {
      dfs(ch, lvl + 1);
    }
  };
  dfs(tree);
  return level;
}

/**
 * @param {HTMLElement | null} tree
 * @return {number}
 */
function _getHeight(tree) {
  let height = 0;
  if (!tree) return height;

  let q = [[tree, 1]];
  while (q.length) {
    const [node, h] = q.shift();
    height = Math.max(h, height);
    for (let child of node.children) {
      q.push([child, h + 1]);
    }
  }
  return height;
}
