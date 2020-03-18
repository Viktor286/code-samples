import { SerializedTree_01 } from '../../DataFixtures/BinaryTrees/SerializedTree_01';
import BinaryTreeRig from './BinaryTreeRig';
import TreeNode from './TreeNode';

describe('deserialize', function() {
  it('should produce instance of TreeNode', () => {
    const deserializedTree_01 = BinaryTreeRig.deserializeTree(
      SerializedTree_01,
    );
    expect(deserializedTree_01 instanceof TreeNode).toBe(true);
  });

  it('should produce tree with all nodes instance of TreeNode', () => {
    const deserializedTree_01 = new BinaryTreeRig(
      BinaryTreeRig.deserializeTree(SerializedTree_01),
    );
    const nodesOfTheTree = deserializedTree_01.getAllNodesInPreOrder();
    nodesOfTheTree.forEach(node => expect(node instanceof TreeNode).toBe(true));
  });
});
