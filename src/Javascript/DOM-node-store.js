// https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node
// how would you create your own Node Store as Map
class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */
  constructor() {
    this.nodes = {};
  }

  set(node, value) {
    node.__nodeStoreKey__ = Symbol();
    this.nodes[node.__nodeStoreKey__] = value;
  }

  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.nodes[node.__nodeStoreKey__];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return !!this.nodes[node.__nodeStoreKey__];
  }
}
