import { SerializedTreeList } from '../DataFixtures/SerializedTreeList';
import BinaryTreeRig from './BinaryTreeRig';
import TreeNode from './TreeNode';

describe('deserialize', function() {
  it('should produce instance of TreeNode', () => {
    const deserializedTree_01 = BinaryTreeRig.deserializeTree(
      SerializedTreeList[4],
    );
    expect(deserializedTree_01 instanceof TreeNode).toBe(true);
  });

  it('should produce tree with all nodes instance of TreeNode', () => {
    const deserializedTree_01 = new BinaryTreeRig(
      BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
    );
    const nodesOfTheTree = deserializedTree_01.getAllNodesInPreOrder();
    nodesOfTheTree.forEach(node => expect(node instanceof TreeNode).toBe(true));
  });
});
