/**
 * Given to identical dom trees, and the position of element in
 * the first one. Return the same element from another tree
 *
 * @param {HTMLElement} element - element of the first tre
 * @param {HTMLElement} root    - root element of second tree
 */
function reverseDomPath(element, root) {
  /**
   * Recursively traverse the tree up to the parent
   * @param node - current node
   * @param acc  - path accumulator
   * @return {number[]} - path containing children indexes
   */
  function path(node, acc = []) {
    if (!node) return acc;
    else {
      const index = node.parent.children.indexOf(node);
      acc.push(index);
      return path(node.parent, acc);
    }
  }

  /*
   * Get the Path
   */
  const result = path(element);

  let elem = root;
  while (result.length > 0) {
    elem = elem.children[result.pop()];
  }

  return elem;
}
