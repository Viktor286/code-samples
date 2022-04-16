// 133. Clone Graph
// https://leetcode.com/problems/clone-graph/
// Given a reference of a node in a connected undirected graph.
// Return a deep copy (clone) of the graph.

class GraphNode {
  constructor(public val = 0, public neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node: GraphNode) {
  if (!node) {
    return null;
  }

  const _node = new GraphNode(node.val);
  const visited = new Map([[node, _node]]);
  const queue = [node];

  while (queue.length > 0) {
    const current = queue.shift();
    const _current = visited.get(current);

    current.neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        const _neighbor = new GraphNode(neighbor.val);
        visited.set(neighbor, _neighbor);
        _current.neighbors.push(_neighbor);

        queue.push(neighbor);
      } else {
        const _neighbor = visited.get(neighbor);
        _current.neighbors.push(_neighbor);
      }
    });
  }

  return _node;
}
