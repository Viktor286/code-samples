import postOrderRecursiveTraverse from './03_PostOrder_Recursive';
import BinaryTreeRig from './Classes/BinaryTreeRig';
import { SerializedTreeList } from './DataFixtures/SerializedTreeList';
import BDAGECHFI from './DataFixtures/BDAGECHFI';
import DBEAFCG from './DataFixtures/DBEAFCG';

describe('preOrderRecursiveTraverse', () => {
  it('should return empty array if root node is null', () => {
    expect(postOrderRecursiveTraverse(null)).toStrictEqual([]);
  });

  it('should return known shape of serialized tree #1', () => {
    expect(postOrderRecursiveTraverse(BinaryTreeRig.deserializeTree(SerializedTreeList[4])).toString()).toBe(
      '2,3,1',
    );
  });

  it('should return known shape of serialized tree #2', () => {
    expect(postOrderRecursiveTraverse(BDAGECHFI).toString()).toBe('D,B,G,E,H,I,F,C,A');
  });

  it('should return known shape of serialized tree #3', () => {
    expect(postOrderRecursiveTraverse(DBEAFCG).toString()).toBe('D,E,B,F,G,C,A');
  });
});
