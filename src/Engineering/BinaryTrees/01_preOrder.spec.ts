import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './01_preOrder';
import BinaryTreeRig from './BinaryTreeRig';
import { SerializedTreeList } from '../../DataFixtures/BinaryTrees/SerializedTreeList';

describe('preOrderIterativeTraverse', () => {
  it('should return empty array if root node is null', () => {
    expect(preOrderIterativeTraverse(null)).toStrictEqual([]);
  });

  it('should return known shape of serialized tree', () => {
    expect(
      preOrderIterativeTraverse(
        BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
      ).toString(),
    ).toBe('1,2,3');
  });
});

describe('preOrderRecursiveTraverse', () => {
  it('should return empty array if root node is null', () => {
    expect(preOrderRecursiveTraverse(null)).toStrictEqual([]);
  });

  it('should return known shape of serialized tree', () => {
    expect(
      preOrderRecursiveTraverse(
        BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
      ).toString(),
    ).toBe('1,2,3');
  });
});
