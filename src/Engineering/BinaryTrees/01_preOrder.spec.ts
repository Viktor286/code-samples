import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse
} from "./01_preOrder";
import BinaryTreeRig from "./Classes/BinaryTreeRig";
import { SerializedTreeList } from "./DataFixtures/SerializedTreeList";
import BDAGECHFI from "./DataFixtures/BDAGECHFI";

describe("preOrderIterativeTraverse", () => {
  it("should return empty array if root node is null", () => {
    expect(preOrderIterativeTraverse(null)).toStrictEqual([]);
  });

  it("should return known shape of serialized tree #1", () => {
    expect(
      preOrderIterativeTraverse(
        BinaryTreeRig.deserializeTree(SerializedTreeList[4])
      ).toString()
    ).toBe("1,2,3");
  });

  it("should return known shape of serialized tree #2", () => {
    expect(preOrderIterativeTraverse(BDAGECHFI).toString()).toBe("A,B,D,C,E,G,F,H,I");
  });
});

describe("preOrderRecursiveTraverse", () => {
  it("should return empty array if root node is null", () => {
    expect(preOrderRecursiveTraverse(null)).toStrictEqual([]);
  });

  it("should return known shape of serialized tree #1", () => {
    expect(
      preOrderRecursiveTraverse(
        BinaryTreeRig.deserializeTree(SerializedTreeList[4])
      ).toString()
    ).toBe("1,2,3");
  });

  it("should return known shape of serialized tree #2", () => {
    expect(preOrderRecursiveTraverse(BDAGECHFI).toString()).toBe("A,B,D,C,E,G,F,H,I");
  });
});
