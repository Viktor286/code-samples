import preOrderRecursiveTraverse from './01_PreOrder_Recursive';
import BinaryTreeRig from './Classes/BinaryTreeRig';
import { SerializedTreeList } from './DataFixtures/SerializedTreeList';
import BDAGECHFI from './DataFixtures/BDAGECHFI';
import DBEAFCG from './DataFixtures/DBEAFCG';

describe('preOrderRecursiveTraverse', () => {
  it('should return empty array if root node is null', () => {
    expect(preOrderRecursiveTraverse(null)).toStrictEqual([]);
  });

  it('should return known shape of serialized tree #1', () => {
    expect(preOrderRecursiveTraverse(BinaryTreeRig.deserializeTree(SerializedTreeList[4])).toString()).toBe(
      '1,2,3',
    );
  });

  it('should return known shape of serialized tree #2', () => {
    expect(preOrderRecursiveTraverse(BDAGECHFI).toString()).toBe('A,B,D,C,E,G,F,H,I');
  });

  it('should return known shape of serialized tree #3', () => {
    expect(preOrderRecursiveTraverse(DBEAFCG).toString()).toBe('A,B,D,E,C,F,G');
  });
});
