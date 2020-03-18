import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import BinaryTreeRig from './Engineering/BinaryTrees/BinaryTreeRig';
import { SerializedTree_01 } from './DataFixtures/BinaryTrees/SerializedTree_01';

console.log(
  preOrderIterativeTraverse(BinaryTreeRig.deserializeTree(SerializedTree_01)),
);
console.log(
  preOrderRecursiveTraverse(BinaryTreeRig.deserializeTree(SerializedTree_01)),
);
