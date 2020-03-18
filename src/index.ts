import {
  preOrderIterativeTraverse,
  preOrderRecursiveTraverse,
} from './Engineering/BinaryTrees/01_preOrder';
import BinaryTreeRig from './Engineering/BinaryTrees/BinaryTreeRig';
import { SerializedTreeList } from './DataFixtures/BinaryTrees/SerializedTreeList';

console.log(
  preOrderIterativeTraverse(
    BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
  ),
);
console.log(
  preOrderRecursiveTraverse(
    BinaryTreeRig.deserializeTree(SerializedTreeList[4]),
  ),
);
