import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './01_preOrder';
import BinaryTree from './BinaryTree';
import { SerializedTree_01 } from '../../DataFixtures/BinaryTrees/SerializedTree_01';

describe('preOrderIterativeTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderIterativeTraverse(
        BinaryTree.deserialize(SerializedTree_01),
      ).toString(),
    ).toBe('1,2,3');
  });
});

describe('preOrderRecursiveTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderRecursiveTraverse(
        BinaryTree.deserialize(SerializedTree_01),
      ).toString(),
    ).toBe('1,2,3');
  });
});
