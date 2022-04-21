// Given a DOM tree, flatten it into an one dimensional array, in level by level style
/**
 * @param {HTMLElement | null} root
 * @return {HTMLElement[]}
 */
function flatten(root) {
  const queue = [root];
  const result = [];

  while (queue.length) {
    const curr = queue.shift();
    if (curr) {
      result.push(curr);
    }
    if (curr?.children) {
      queue.push(...Array.from(curr.children));
    }
  }
  return result;
}
