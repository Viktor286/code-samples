import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import BinaryTree from './Engineering/BinaryTrees/BinaryTree';
import { SerializedTree_01 } from './DataFixtures/BinaryTrees/SerializedTree_01';

console.log(
  preOrderIterativeTraverse(BinaryTree.deserialize(SerializedTree_01)),
);
console.log(
  preOrderRecursiveTraverse(BinaryTree.deserialize(SerializedTree_01)),
);
