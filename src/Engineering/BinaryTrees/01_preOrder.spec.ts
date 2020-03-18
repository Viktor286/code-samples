import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './01_preOrder';
import BinaryTreeRig from './BinaryTreeRig';
import { SerializedTree_01 } from '../../DataFixtures/BinaryTrees/SerializedTree_01';

describe('preOrderIterativeTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderIterativeTraverse(
        BinaryTreeRig.deserializeTree(SerializedTree_01),
      ).toString(),
    ).toBe('1,2,3');
  });
});

describe('preOrderRecursiveTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderRecursiveTraverse(
        BinaryTreeRig.deserializeTree(SerializedTree_01),
      ).toString(),
    ).toBe('1,2,3');
  });
});
