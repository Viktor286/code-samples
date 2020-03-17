import { SerializedTree_01 } from '../../DataFixtures/BinaryTrees/SerializedTree_01';
import BinaryTree from './BinaryTree';
import TreeNode from './TreeNode';

describe('deserialize', function() {
  it('should produce instance of TreeNode', () => {
    const deserializedTree_01 = BinaryTree.deserialize(SerializedTree_01);
    expect(deserializedTree_01 instanceof TreeNode).toBe(true);
  });

  it('should produce tree with all nodes instance of TreeNode', () => {
    const deserializedTree_01 = new BinaryTree(
      BinaryTree.deserialize(SerializedTree_01),
    );
    const nodesOfTheTree = deserializedTree_01.getAllNodesInPreOrder();
    nodesOfTheTree.forEach(node => expect(node instanceof TreeNode).toBe(true));
  });
});
