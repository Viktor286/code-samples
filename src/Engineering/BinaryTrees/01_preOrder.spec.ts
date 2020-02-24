import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './01_preOrder';
import { deserialize } from './TreeConvertor';
import { SerializedTree_01 } from '../../DataFixtures/BinaryTrees/SerializedTree_01';

describe('preOrderIterativeTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderIterativeTraverse(deserialize(SerializedTree_01)).toString(),
    ).toBe('1,2,3');
  });
});

describe('preOrderRecursiveTraverse', () => {
  it('should return known shape of serialized tree', () => {
    expect(
      preOrderRecursiveTraverse(deserialize(SerializedTree_01)).toString(),
    ).toBe('1,2,3');
  });
});
